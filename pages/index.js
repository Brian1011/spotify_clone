import Head from "next/head";
import Center from "../components/Center";
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
        <main className="flex">
          <Sidebar />
          <Center />
          {/* Center */}
        </main>

        <div>{/* PLayer */}</div>
      </div>
    </div>
  );
}
