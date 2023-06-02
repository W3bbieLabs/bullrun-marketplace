import React, { useState } from "react";
import {
  useCreateDirectListing,
  useContract,
  Web3Button,
} from "@thirdweb-dev/react";

// Your smart contract address
const contractAddress = "0x24c9F7FdfF0e55d594BF32bCA66F1EED81b0ccE8";
const fixedAssetContractAddress = "0x59336Fd357f07a6501B2444556ae98633B741297";
const fixedCurrencyContractAddress = "0xA112614CB7262336E9AC667fa0b7233FD3E041F7";

function CreateListing() {
  const { contract } = useContract(contractAddress, "marketplace-v3");
  const [tokenId, setTokenId] = useState("");
  const [pricePerToken, setPricePerToken] = useState("");
  const [duration, setDuration] = useState("10"); // Default duration is 10 days
  const [startTimestamp, setStartTimestamp] = useState(new Date());
  const [endTimestamp, setEndTimestamp] = useState(
    new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000) // Default end date is 10 days from the current date
  );
  const {
    mutateAsync: createDirectListing,
    isLoading,
    error,
  } = useCreateDirectListing(contract);

  const handleRadioButtonChange = (e) => {
    const selectedOption = e.target.value;
    setDuration(selectedOption);

    const currentTime = new Date();
    setStartTimestamp(currentTime);

    if (selectedOption === "10") {
      const tenDaysFromNow = new Date(currentTime.getTime() + 10 * 24 * 60 * 60 * 1000);
      setEndTimestamp(tenDaysFromNow);
    } else if (selectedOption === "30") {
      const thirtyDaysFromNow = new Date(currentTime.getTime() + 30 * 24 * 60 * 60 * 1000);
      setEndTimestamp(thirtyDaysFromNow);
    }
  };

  const handleSubmit = () => {
    createDirectListing({
      assetContractAddress: fixedAssetContractAddress,
      tokenId,
      pricePerToken,
      currencyContractAddress: fixedCurrencyContractAddress,
      isReservedListing: false,
      quantity: "1",
      startTimestamp,
      endTimestamp,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Token ID:
          <input
            type="text"
            value={tokenId}
            onChange={(e) => setTokenId(e.target.value)}
            style={{ backgroundColor: "grey", color: "black" }}
          />
        </label>
        <br />
        <label>
          Price Per Token:
          <input
            type="text"
            value={pricePerToken}
            onChange={(e) => setPricePerToken(e.target.value)}
            style={{ backgroundColor: "grey", color: "black" }}
          />
        </label>
        <br />
        <div>
          <span>Choose duration:</span>
          <div>
            <label>
              <input
                type="radio"
                name="duration"
                value="10"
                onChange={handleRadioButtonChange}
              />
              10 days
            </label>
            <label>
              <input
                type="radio"
                name="duration"
                value="30"
                onChange={handleRadioButtonChange}
              />
              30 days
            </label>
          </div>
        </div>
        <br />
        <Web3Button
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
          colorMode="light"
          accentColor="#F213A4"
          contractAddress={contractAddress}
          action={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Creating Listing..." : "Create Direct Listing"}
        </Web3Button>
        {error && <p></p>}
      </form>
    </div>
  );
}

export default CreateListing;
