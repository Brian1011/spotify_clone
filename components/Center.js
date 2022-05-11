import { useSession } from "next-auth/react";

const Center = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-grow text-white">
      <h1>This is center</h1>
      <header>
        <div>
          <div>{session.user}</div>
        </div>
      </header>
    </div>
  );
};

export default Center;
