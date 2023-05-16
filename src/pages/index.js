import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ConnectWallet } from "@thirdweb-dev/react";
import Video from "@/components/video";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center font-sharetech">
        <div className="border-b border-black py-6 text-center">
          <p>free markets serving bulls and bears</p>
        </div>
        <div className="my-auto button-list flex flex-col justify-center gap-2 text-3xl">
          <button
            className="button 
                             ml-12 
                             mr-12 
                             mb-4 
                             bg-primary 
                             border-2 
                             text-black 
                             font-bold py-2 px-4 
                             hover:text-primary 
                             hover:border-l-4 
                             hover:bg-white"
          >
            BUY EMOTES
          </button>
          <button
            className="button 
                             ml-12 
                             mr-12 
                             mb-4 
                             bg-secondary 
                             border-2
                             text-white 
                             font-bold py-2 px-4
                             hover:text-secondary
                             hover:border-l-4
                             hover:bg-white"
          >
            TRADE EMOTES
          </button>
          
          <ConnectWallet
            className="!important uppercase button 
                             ml-12 
                             mr-12 
                             mb-4 
                             bg-gray 
                             border-2 
                             border-solid text-black 
                             font-bold py-2 px-4
                             hover:text-gray
                             hover:border-l-4
                             hover:bg-white text-3xl rounded-none text-center"
                             
          />
          <button
            className="button 
                             ml-12 
                             mr-12 
                             bg-white
                             border-2 
                             text-black 
                             font-bold py-2 px-4
                             hover:text-black
                             hover:border-l-4
                             hover:bg-primary "
          >
            PLAY BULL RUN
          </button>
          <Video />
        </div>
        <div className="border-t border-black py-6 text-center">
          <p>bull run 1.0.0 c/o w3bbie</p>
        </div>
      </div>
    </div>
  );
}
