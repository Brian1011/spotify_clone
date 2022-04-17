import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify 2.0</title>
        <meta
          name="Spotify"
          content="Spotify 2.0 clone. Created by Brian Mutinda"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black h-screen overflow-hidden">
        <main className="">
          <Sidebar />

          {/* Center */}
        </main>

        <div>{/* PLayer */}</div>
      </div>
    </div>
  );
}
