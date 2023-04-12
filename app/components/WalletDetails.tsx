"use client";

import React from "react";

import { useAccount, useNetwork } from "wagmi";

function WalletDetails() {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();

  if (isConnected) {
    return (
      <div className="flex flex-col gap-5 sm:w-[350px]">
        <div className="border-neutral-600 border-[1px] p-3 rounded-lg text-black font-bold break-words">
          🔗 {address}
        </div>
        <div>Connected to {chain?.name || "Polygon Chain"} </div>
        <div className="flex items-center justify-end">
          <a
            href={`${chain?.blockExplorers?.default.url}/address/${address}`}
            target="_blank"
            className="block bg-[#0E76FD] rounded-lg p-3 text-white font-bold
        hover:bg-[#3d8aef] hover:scale-105 hover:cursor-pointer transition text-center w-32"
          >
            Explorer
          </a>
        </div>
        <br />
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-semibold text-lg text-rose-500">
        Seems like haven&apos;t connected yet
      </h2>
      <p className="text-neutral-500">
        👛Please connect your wallet to proceed{" "}
      </p>
    </div>
  );
}

export default WalletDetails;
