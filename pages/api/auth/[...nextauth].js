import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { refreshAccessToken } from "spotify-web-api-node/src/server-methods";
import spotifyAPi, { LOGIN_URL } from "../../../lib/spotify";

async function refreshUserAccessToken(token) {
  try {
    spotifyAPi.setAccessToken(token.accessToken);
    spotifyAPi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyAPi.refreshAccessToken();
    console.log("REFRESHED TOKEN IS", refreshedToken);

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now + refreshedToken.expires_in * 1000, // 1 hour = 36000 returns
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    return {
      ...token,
      error: "RefrehAceessTokenError",
    };
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],

  secret: process.env.JWT_SERCRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // initial sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          acessTokenExpires: account.expires_at * 1000, // in milliseconds
        };
      }

      console.log("Token expires in " + token.acessTokenExpires);
      console.log(Date.now().toString);
      // if token has not expired
      if (Date.now() > token.acessTokenExpires) {
        console.log("Existing access token is valid");
        return token;
      }

      // access tokens expires refresh it
      console.log("Access tokens has expired, refreshing....");
      return await refreshUserAccessToken(token);
    },

    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshAccessToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    },
  },
});
