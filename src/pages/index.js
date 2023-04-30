import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ConnectWallet } from "@thirdweb-dev/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center font-sharetech">
        <div className="border-b border-black py-6 text-center">
          <p>select your connection method</p>
        </div>
        <div className="my-auto button-list flex flex-col justify-center gap-2 text-3xl">
          <button className="button ml-12 mr-12 mb-4 bg-primary border border-black text-black font-bold py-2 px-4">
            BUY EMOTES
          </button>
          <button className="button ml-12 mr-12 mb-4 bg-secondary border border-black text-white font-bold py-2 px-4">
            TRADE EMOTES
          </button>
          <button className="button ml-12 mr-12 mb-4 bg-gray border border-black text-black font-bold py-2 px-4">
            CONNECT WALLET
          </button>
          <button className="button ml-12 mr-12 border border-black text-black font-bold py-2 px-4">
            PLAY BULL RUN
          </button>
        </div>
        <div className="border-t border-black py-6 text-center">
          <p>bull run 1.0.0 c/o w3bbie</p>
        </div>
      </div>
    </div>
  );
}
