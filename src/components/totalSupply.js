import { useContract, useContractRead } from "@thirdweb-dev/react";

import React from "react";


// Your smart contract address here
const contractAddress = "0xA112614CB7262336E9AC667fa0b7233FD3E041F7";

export default function TotalSupply() {
  // Get the smart contract
  const { contract } = useContract(
    "0xA112614CB7262336E9AC667fa0b7233FD3E041F7"
  );

  // Read the current TotalSupply
  const { data: totalSupply, isLoading} = useContractRead(contract, "totalSupply");

  const currentTotalSupply = totalSupply ? totalSupply.toString().slice(0, -18) : "";


  return (

    <>
  <b> {isLoading ? "Loading..." : currentTotalSupply} </b>
    </>

  )

  }