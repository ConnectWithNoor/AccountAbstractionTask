"use client";

import {
  googleWallet,
  facebookWallet,
  githubWallet,
  discordWallet,
  twitchWallet,
  twitterWallet,
} from "@zerodevapp/wagmi/rainbowkit";

import {
  connectorsForWallets,
  RainbowKitProvider,
  ConnectButton,
} from "@rainbow-me/rainbowkit";

import { publicProvider } from "wagmi/providers/public";
import {
  configureChains,
  createClient,
  WagmiConfig,
  useAccount,
  useDisconnect,
} from "wagmi";
import { polygonMumbai } from "wagmi/chains";

import "@rainbow-me/rainbowkit/styles.css";
import { useEffect } from "react";

function ConnectWalletBtn() {
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

  const connectors = connectorsForWallets([
    {
      groupName: "Social",
      wallets: [
        googleWallet({ options: { projectId } }),
        facebookWallet({ options: { projectId } }),
        githubWallet({ options: { projectId } }),
        discordWallet({ options: { projectId } }),
        twitchWallet({ options: { projectId } }),
        twitterWallet({ options: { projectId } }),
      ],
    },
  ]);

  const { chains, provider, webSocketProvider } = configureChains(
    [polygonMumbai],
    [publicProvider()]
  );

  const client = createClient({
    autoConnect: true,
    connectors,
    provider,
    webSocketProvider,
  });

  const { address, isConnected } = useAccount();

  useEffect(() => {}, [isConnected, address]);

  if (isConnected) {
    return (
      <div>
        <div
          className="bg-[#0E76FD] rounded-lg p-3 text-white font-bold
        hover:bg-[#3d8aef] hover:scale-105 hover:cursor-pointer transition
        "
        >
          {address?.slice(0, 6)}...{address?.slice(-5)}
        </div>
      </div>
    );
  }

  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains} modalSize={"compact"}>
        <ConnectButton />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default ConnectWalletBtn;
