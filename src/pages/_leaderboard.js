import { useContract, useContractRead, Web3Button } from "@thirdweb-dev/react";
import Link from "next/link";
import React, { useState } from "react";


// Your smart contract address here
const contractAddress = "0x26889fe63255f3f80EcDb78D3fb1f0Bc8861E3a1";

export default function LeaderBoard() {
  // Get the smart contract
  const { contract } = useContract(
    "0x26889fe63255f3f80EcDb78D3fb1f0Bc8861E3a1"
  );

  // Read the current leaders
  const { data: currentLeaders, isLoading } = useContractRead(
    contract,
    "getLeaderboard" 
  );

  const displayLeaders = currentLeaders ? currentLeaders.toString() : "";

  return (
    <div className="flex flex-col h-screen">
        <div className="flex-grow flex flex-col justify-center font-sharetech">
    <div className="leaderboard">
      
      <p className="leaders ml-12 mr-12 mb-4 bg-secondary border-2 text-white font-bold py-2 px-4 overflow-auto max-w-64 hover:text-secondary hover:border-l-4 hover:bg-white text-center">
  Current Leaders: <b>{isLoading ? "Loading..." : displayLeaders.split(',').slice(0, 10).map((item, index) => (
    <React.Fragment key={item}>
      <div>
        <span className="mr-1">{index + 1}.</span>
        <span>{item.trim()}</span>
      </div>
      {index !== displayLeaders.split(',').slice(0, 10).length - 1 && <br />}
    </React.Fragment>
  ))}</b>
</p>

<div className="my-auto button-list flex flex-col justify-center gap-2 text-3xl">



      <Web3Button  className="!important uppercase button 
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
        contractAddress={contractAddress}
        action={(contract) => contract.call("approveERC20Tokens")}
        colorMode="light"
        accentColor="#F213A4"
      >
        1. Set Your Score
      </Web3Button>

      <Web3Button  className="!important uppercase button 
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
        contractAddress={contractAddress}
        action={(contract) => contract.call("updateLeaderboard")}
        colorMode="light"
        accentColor="#F213A4"
      >
        2. Update LeaderBoard
      </Web3Button>
    
      <Link className="link 
            ml-12 
            mr-12 
            mb-4 
            bg-primary 
            border-2 
            text-black 
            font-bold py-2 px-4 
            hover:text-primary 
            hover:border-l-4 
            hover:bg-gray" href="/"> 
            Home
  
</Link>
      

</div>
    </div>
    </div>
    </div>
  );
}