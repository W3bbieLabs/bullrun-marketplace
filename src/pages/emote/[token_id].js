import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";

import {
  useActiveClaimCondition,
  useAddress,
  useContract,
  useNFT,
  useClaimNFT,
} from "@thirdweb-dev/react";

const Emote = () => {
  const router = useRouter();

  const address = useAddress();

  const { token_id } = router.query;

  // Event handlers for the onClick events
  const handleNext = () => {
    const nextTokenId = (parseInt(token_id) + 1) % 6;
    router.push(`/emote/${nextTokenId}`);
  };

  const handlePrev = () => {
    const prevTokenId = (parseInt(token_id) - 1 + 6) % 6;
    router.push(`/emote/${prevTokenId}`);
  };

  const { contract } = useContract(
    "0x59336Fd357f07a6501B2444556ae98633B741297"
  );

  const { data } = useActiveClaimCondition(contract, token_id);

  const { data: nft, isLoading, error } = useNFT(contract, token_id);

  const { mutate: claimNFT } = useClaimNFT(contract);

  return (
    <div className="flex flex-col h-screen font-sharetech">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center">
        <div className="grid grid-rows-4 h-1/3 text-center text-3xl border-black">
          <div className="flex items-center justify-center border-b">
            <h1>{nft?.metadata?.name}</h1>
          </div>
          <div className="flex border-b text-sm justify-center">
            <div className="w-[50%] py-4 border-r border-black">
              <h1>$BULL NEEDED</h1>
            </div>
            <div className="w-[50%] py-4">
              <h1>🥷🏽ABILITIES INCLUDED</h1>
            </div>
          </div>
          <div className="flex border-b text-2xl">
            <div className="w-[50%] py-3 border-r border-black">
              <h1>{`${parseInt(data?.price?._hex) / 1000000000000000000}`}</h1>
            </div>
            <div className="w-[50%] py-3">
              <h1>HONEYPOT +25%</h1>
            </div>
          </div>
          <div className="flex items-center justify-center border-b text-sm">
            <button>
              <img
                className="w-12 mr-8"
                src="/arrow_selector_left.svg"
                onClick={handlePrev}
              ></img>
            </button>
            <h1>cycle emotes</h1>
            <button>
              <img
                className="w-12 ml-8"
                src="/arrow_selector_right.svg"
                onClick={handleNext}
              ></img>
            </button>
          </div>
        </div>
        <div className="flex-grow button-list flex flex-col justify-center text-3xl">
          <button
            className="button
            mx-12
            mb-4
            bg-primary
            border-2
            text-black
            font-bold py-1 px-4
            lg:hover:text-primary
            lg:hover:border-l-4
            lg:hover:bg-white"
            onClick={() =>
              claimNFT({ to: address, quantity: 1, tokenId: token_id })
            }
          >
            PURCHASE EMOTE
          </button>
          <button
            className="button
            mx-12
            mb-4
            bg-secondary 
            border-2
            border-solid
            border-black
            text-white 
            font-bold py-1 px-4
            lg:hover:text-secondary
            lg:hover:border-l-4
            lg:hover:bg-white"
          >
            <Link href={"https://w3bbie.xyz/test"} target="_blank">
              PLAY BULL RUN
            </Link>
          </button>
          <button
            className="button
            mx-12
            mb-4
            bg-gray 
            border-2 
            border-solid text-black 
            font-bold py-1 px-4
            lg:hover:text-gray
            lg:hover:border-l-4
            lg:hover:bg-white"
          >
            <Link href={"/marketplace"}>BACK TO MARKET</Link>
          </button>
          <button
            className="button
            mx-12
           bg-white
            border-2 
            text-black 
            font-bold py-1 px-4
            lg:hover:text-black
            lg:hover:border-l-4
            lg:hover:bg-primary"
          >
            <Link href={"/"}>MAIN MENU</Link>
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Emote;
