import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Spotify 2.0</title>
        <meta
          name="Spotify"
          content="Spotify 2.0 clone. Created by Brian Mutinda"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar />

        {/* Center */}
      </main>

      <div>{/* PLayer */}</div>
    </div>
  );
}
