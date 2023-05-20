import { useActiveClaimCondition, useContract} from "@thirdweb-dev/react";
import React from "react";

// Your smart contract address here
const contractAddress = "0xA112614CB7262336E9AC667fa0b7233FD3E041F7";

export default function ActiveClaim() {
  // Get the smart contract
  const { contract } = useContract(contractAddress);

  // Read the current active claim condition
  const { data: activeClaimCondition, isLoading } = useActiveClaimCondition(contract);

  // Format and access the relevant properties
  const maxClaimableSupply = activeClaimCondition?.maxClaimableSupply || "";
  const startTime = activeClaimCondition?.startTime ? new Date(activeClaimCondition.startTime) : "";
  const price = activeClaimCondition?.price || "";
  const currencySymbol = activeClaimCondition?.currencyMetadata?.symbol || "";
  const availableSupply = activeClaimCondition?.availableSupply || "";
  const currencyAddress = activeClaimCondition?.currencyAddress || "";


  return (
    <>
      <b>{isLoading ? "Loading..." : `Max Claimable Supply: ${maxClaimableSupply}`}</b>
      <p>{isLoading ? "" : `Start Time: ${startTime}`}</p>
      <p>{isLoading ? "" : `Price: ${price}`}</p>
      <p>{isLoading ? "" : `Currency Symbol: ${currencySymbol}`}</p>
      {//<p>{isLoading ? "" : `Available Supply: ${availableSupply}`}</p>*//}
}
    </>
  );
}
