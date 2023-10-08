import "../../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import type { AppProps } from "next/app";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { UserContext } from "../lib/magic/UserContext";
import { magic } from "../lib/magic/magic";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import "../../styles/globals.css";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  const desiredChainId = ChainId.Polygon;
  const [user, setUser] = useState();

  // Create our router
  const router = useRouter();

  useEffect(() => {
    // Set loading to true to display our loading message within pages/index.js
    setUser({ loading: true });
    // Check if the user is authenticated already
    magic.user.isLoggedIn().then((isLoggedIn) => {
      if (isLoggedIn) {
        // Pull their metadata, update our state, and route to dashboard
        magic.user.getMetadata().then((userData) => setUser(userData));
        router.push("/");
      } else {
        // If false, route them to the login page and reset the user state
        router.push("/welcome");
        setUser({ user: null });
      }
    });
    // Add an empty dependency array so the useEffect only runs once upon page load
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <ThirdwebProvider desiredChainId={desiredChainId}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThirdwebProvider>
    </UserContext.Provider>
  );
}
