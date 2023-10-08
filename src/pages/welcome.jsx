import { useContext, useState, useEffect } from "react";
import { UserContext } from "../lib/magic/UserContext";
import { useRouter } from "next/router";
import { magic } from "../lib/magic/magic";
import Link from "next/link";
import Image from "next/image";
import Indenticon from "react-identicons";

export default function Login() {
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState("");
  // Create our router
  const router = useRouter();

  // Make sure to add useEffect to your imports at the top
  useEffect(() => {
    // Check for an issuer on our user object. If it exists, route them to the profile.
    user?.issuer && router.push("/");
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Log in using our email with Magic and store the returned DID token in a variable
    try {
      const didToken = await magic.auth.loginWithMagicLink({
        email,
      });

      // Send this token to our validation endpoint
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${didToken}`,
        },
      });

      // If successful, update our user state with their metadata and route to the profile
      if (res.ok) {
        const userMetadata = await magic.user.getMetadata();
        setUser(userMetadata);
        router.push("/profile");
      }
    } catch (error) {
      console.error(error);
    }
    setEmail("");
  };

  return (
    <div className="flex flex-col md:flex-row w-4/5 bg-[#151c25] justify-between items-center mx-auto py-10">
      <div className="md:w-3/6 w-full">
        <div>
          <h1 className="text-white text-5xl font-bold">
            Passwordless Decentralized <br /> Social Media powered by <br />
            <span className="text-gradient">Lens</span> Protocol &
            <span className="text-gradient"> Magic</span>
          </h1>
          <p className="text-gray-500 font-semibold text-sm mt-3">
            Gain Rewards on amazing Publications only on Leny-Space. Sign In
            with your Email without a password and onboard yourself into Web3
            through Lens Technology
          </p>
        </div>
        <div className="flex mt-5 justify-between">
          <form onSubmit={handleLogin}>
            <label className="text-white" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="shadow-xl shadow-black text-white bg-[#28043d] hover:bg-[#19012c] rounded-full p-2"
              type="submit"
            >
              Send Magic Link
            </button>
          </form>{" "}
        </div>
        <div>
          <div className="w-3/4 flex justify-between items-center mt-5">
            <div className="text-white">
              <p className="font-bold">200</p>
              <small className="text-gray-300">Lens Profile</small>
            </div>
            <div className="text-white">
              <p className="font-bold">150</p>
              <small className="text-gray-300">Publications</small>
            </div>
            <div className="text-white">
              <p className="font-bold">500</p>
              <small className="text-gray-300">Rewards</small>
            </div>
          </div>
        </div>
      </div>

      <div className="shadow-xl shadow-black md:w-2/6 w-full mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800">
        <Image
          width={1000}
          height={1000}
          className="h-80 w-full object-cover"
          src="/logo.png"
          alt="header-image"
        />
        <div className="flex justify-start items-center p-3">
          <Indenticon
            className="h-10 w-10 object-contain rounded-full mr-3"
            size={50}
          />
          <div>
            <p className="text-white font-semibold ">jerry.lens</p>
            <small className="text-pink-800 font-bold">@you</small>
          </div>
        </div>
      </div>
    </div>
  );
}
