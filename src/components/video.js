import { useAddress, useDisconnect, useContract, useNetworkMismatch } from '@thirdweb-dev/react';


import { useState, useEffect } from "react";






function Video() {

   const address = useAddress();
   
   const isMismatched = useNetworkMismatch();
   const disconnectWallet = useDisconnect();
   const edition = useContract("0xb4170B3d34Be5De483F0f385e40028C05Ee09a60", "edition").contract
   const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
   
   useEffect(() => {
     if (!address) {
         return;
     }
   
     const checkBalance = async () => {
            try {
             const nfts = await edition.getOwned(address);
             setHasClaimedNFT(nfts?.length > 0);
            } catch (error) {
             setHasClaimedNFT(false);
             
            }
          };
          checkBalance();
   }, [address , edition]);
     
  
  
  
   //////**SIGN IN AREA */
  
   if (!address) {
         return (
             <>
             <div className='font-link'>
             <div className='eggz'>
           
            {address ? (
        <>
        {isMismatched}
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Your address: {address}</p>
        </>
      ) : (
        <div className='connect'>
        
        

        
        </div>
      )} 
      </div>
      </div>
             </>
         )
     }

    


    
    
    
     ///////***MEMBERS AREA *//////// 


   if (hasClaimedNFT) {
       return (
        <>
          <iframe src="https://player.thetavideoapi.com/video/video_gshi0kmd6qipqwsvzmwdt7nen9" 
        border="0" 
        width="100%" 
        height="100%"
        allowfullscreen/>
        </>

           
       )
   }

   
   

   
   
   ////***NON - MEMBERS AREA *//////
   
   

   return (
    <>
    <div className='eggz'>
        <p>Easter Egg Message Here</p>


    </div>
    
    </>
   );
  };

export default Video;