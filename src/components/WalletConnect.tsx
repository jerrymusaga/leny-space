import {
  useAddress,
  useNetworkMismatch,
  useNetwork,
  ConnectWallet,
  ChainId,
  MediaRenderer,
} from "@thirdweb-dev/react";
import React from "react";

type Props = {};

export default function WalletConnect({}: Props) {
  const address = useAddress();
  const isOnWrongNetwork = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  // 1. User needs to connect their wallet
  if (!address) {
    return <ConnectWallet />;
  }

  // 2. User needs to switch network to Polygon
  if (isOnWrongNetwork) {
    return (
      <button onClick={() => switchNetwork?.(ChainId.Mumbai)}>
        Switch Network
      </button>
    );
  }

  return <>Connect Wallet</>;
}
