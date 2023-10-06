import {
  useExplorePublicationsQuery,
  PublicationSortCriteria,
} from "../graphql/generated";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import useLogin from "../lib/auth/useLogin";
import WalletConnect from "../components/WalletConnect";
export default function Home() {
  const address = useAddress();
  const { mutate: requestLogin } = useLogin();

  return <WalletConnect />;
}
