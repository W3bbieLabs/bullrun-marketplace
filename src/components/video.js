import {
  useAddress,
  useDisconnect,
  useContract,
  useNetworkMismatch,
} from "@thirdweb-dev/react";
import { useState, useEffect } from "react";

function Video({ url }) {
  const address = useAddress();
  const isMismatched = useNetworkMismatch();

  const edition = useContract(
    "0x59336Fd357f07a6501B2444556ae98633B741297",
    "edition"
  ).contract;
  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);

  useEffect(() => {
    const checkBalance = async () => {
      try {
        const nfts = await edition.getOwned(address);
        setHasClaimedNFT(nfts?.length > 0);
      } catch (error) {
        setHasClaimedNFT(false);
      }
    };
    checkBalance();
  }, [address, edition]);

  //////**SIGN IN AREA */

  if (
    url ===
    "https://player.thetavideoapi.com/video/video_81ve1vbm7k6pq17n9d6bw0m1h9"
  ) {
    ///////***MEMBERS AREA *////////
    if (hasClaimedNFT) {
      return (
        <div className="lg:h-screen lg:w-screen">
          <video controls width="100%" height="100%">
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    } else {
      return (
        <div className="eggz">
          <p>Purchase an EMOTE to unlock the Vid</p>
        </div>
      );
    }
  }

  return (
    <div className="z-50 cursor-pointer">
      <video controls width="100%" height="100%">
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
