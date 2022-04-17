import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-500">
      <Head>
        <title>Spotify 2.0</title>
        <meta
          name="Spotify"
          content="Spotify 2.0 clone. Created by Brian Mutinda"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>This is a DOPE spotify 2.0 build</h1>
      </div>
    </div>
  );
}
