import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="flex flex-col bg-black min-h-screen w-full items-center justify-center">
      <img className="w-52 mb-5" src="https://links.papareact.com/9xl"></img>

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="bg-[#18D860] text-white p-5 rounded-lg"
            onClick={()=> signIn(provider.id, {callbackUrl: "http://localhost:3000/"})}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

// server side render
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
