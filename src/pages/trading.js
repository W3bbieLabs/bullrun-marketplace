import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Link from "next/link";
import { useContract, useDirectListings, MediaRenderer, Web3Button, useAddress } from "@thirdweb-dev/react";
import CreateListing from "@/components/createlisting";

const Trading = () => {
  const { contract } = useContract("0x24c9F7FdfF0e55d594BF32bCA66F1EED81b0ccE8");
  const { data: listings, isLoading } = useDirectListings(contract);
  const address = useAddress(); // Retrieve the connected wallet

  const handleBuyFromListing = (listingId, quantity, pricePerToken) => {
    const buyFor = address || ""; // Set buyFor as the connected wallet's address
    const currency = "0xA112614CB7262336E9AC667fa0b7233FD3E041F7"; // Set currency address
    const expectedTotalPrice = (quantity * pricePerToken).toString(); // Convert to string before passing to BigNumber.from
  
    contract.call("buyFromListing", [listingId, buyFor, quantity, currency, expectedTotalPrice]);
  };

  return (
    <div className="flex flex-col min-h-screen font-sharetech">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center pb-8">
        <div className="grid grid-rows-1 h-1/3 text-center text-3xl border-black">
          <div className="flex border-b text-sm justify-center">
            <div className="grid gap-4">
              {listings &&
                listings.map((listing) => (
                  <div key={listing.id} className="flex flex-col items-center">
                    <p>Asset Contract Address: {listing.assetContractAddress}</p>
                    <p>BULL TOKENS: {listing.pricePerToken}</p>
                    <p>Seller: {listing.creatorAddress}</p>
                    <p>Name: {listing.asset.name}</p>
                    <p>Token ID: {listing.asset.id}</p>
                    <div className="flex items-center justify-center">
                      <MediaRenderer src={listing.asset.animation_url} />
                    </div>
                    <div className="flex flex-col items-center center-text">
                      <label>
                        Buy For:
                        <input type="text" value={address || ''} readOnly />
                      </label>
                      <label>
                        Listing ID:
                        <input type="text" value={listing.id} readOnly />
                      </label>
                      <label>
                        Quantity:
                        <input type="text" value="1" readOnly />
                      </label>
                      <label>
                        Currency:
                        <input type="text" value="0xA112614CB7262336E9AC667fa0b7233FD3E041F7" readOnly />
                      </label>
                      <label>
                        BULL TOKENS:
                        <input type="text" value={listing.pricePerToken} readOnly />
                      </label>
                      <Web3Button className="!important uppercase button 
                             ml-12 
                             mr-12 
                             mb-4 
                             bg-primary
                             border-2 
                             border-solid text-black 
                             font-bold py-2 px-4
                             hover:text-gray
                             hover:border-l-4
                             hover:bg-white text-3xl rounded-none text-center"
                             colorMode="light"
                             accentColor="#F213A4"
                      contractAddress="0x24c9F7FdfF0e55d594BF32bCA66F1EED81b0ccE8" action={() => handleBuyFromListing(listing.id, 0, listing.pricePerToken)}>
                        Buy Now
                      </Web3Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="button ml-12 mt-2 mr-12 mb-4  bg-secondary border-2 border-solid border-black text-white font-bold py-1 px-4 lg:hover:text-secondary lg:hover:border-l-4 lg:hover:bg-white text-center">

          <h1>CREATE BULL EMOTE LISTING</h1>
          <CreateListing />
        </div>
        <button className="button mt-4 mx-12 bg-white border-2 text-black font-bold py-1 px-4">
          <Link href={"/"}>MAIN MENU</Link>
        </button>
       
      </div>
    </div>
  );
};

export default Trading;
