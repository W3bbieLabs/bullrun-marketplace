import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Video from "@/components/video";
import Modal from "@/components/Modal";
import { useState } from "react";

import toast, { Toaster } from "react-hot-toast";

const notify = (msg) =>
  toast(msg, {
    style: {
      border: "1px solid #000000",
      borderRadius: "0",
      padding: "16px",
      color: "#000000",
    },
    iconTheme: {
      primary: "#ffffff",
      secondary: "#000000",
    },
  });

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const address = useAddress();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    if (!address) {
      notify("Please connect your wallet to view content");
    } else {
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col h-screen font-sharetech">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center">
        <div className="border-b border-black py-6 text-center">
          <p>free markets serving bulls and bears</p>
        </div>
        <div className="my-auto button-list flex flex-col justify-center gap-2 text-2xl">
          <button
            className="button 
              ml-12 
              mr-12 
              mb-4 
              bg-primary 
              border-2 
              text-black 
              font-bold py-1 px-4 
              lg:hover:text-primary 
              lg:hover:border-l-4 
              lg:hover:bg-white"
          >
            <Link href={"/emote/5"}>BUY EMOTES</Link>
          </button>

          <button
            className="button 
              ml-12 
              mr-12 
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
            TRADE EMOTES
          </button>

          <ConnectWallet
            className="!important uppercase button 
              justify-center
              ml-12 
              mr-12 
              mb-4 
              bg-gray 
              border-2 
              border-solid text-black 
              font-bold py-1 px-4
              lg:hover:text-gray
              lg:hover:border-l-4
              lg:hover:bg-white text-2xl rounded-none text-center"
          />
          <button
            className="button 
            ml-12 
            mr-12 
            mb-4 
            bg-primary 
            border-2 
            text-black 
            font-bold py-1 px-4 
            lg:hover:text-primary 
            lg:hover:border-l-4 
            lg:hover:bg-gray"
          >
            <Link href="/_leaderboard">LEADERBOARD</Link>
          </button>

          <button
            className="button 
              ml-12 
              mr-12 
              mb-4
              bg-white
              border-2 
              text-black 
              font-bold py-1 px-4
              lg:hover:text-black
              lg:hover:border-l-4
              lg:hover:bg-primary "
          >
            <Link href={"http://w3bbie.xyz/test/"} target="_blank">
              PLAY BULL RUN
            </Link>
          </button>
          <button
            className="button 
                             ml-12 
                             mr-12 
                             bg-white
                             border-2 
                             text-black 
                             font-bold py-1 px-4
                             lg:hover:text-black
                             lg:hover:border-l-4
                             lg:hover:bg-primary "
            onClick={openModal}
          >
            VIDEO
          </button>
          <Toaster />
          {modalOpen && (
            <Modal
              url={
                "https://player.thetavideoapi.com/video/video_gshi0kmd6qipqwsvzmwdt7nen9"
              }
              onClose={closeModal}
              component={Video}
            />
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
