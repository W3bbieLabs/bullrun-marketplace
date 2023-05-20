import Link from "next/link";
import { useAddress, useWallet } from "@thirdweb-dev/react";
import { useEffect } from "react";

const Navbar = () => {
  const address = useAddress();
  const wallet = useWallet();

  useEffect(() => {
    if (address) {
      console.log("address", address);
    }
  }, [address]);

  return (
    <nav className="border-top border-b border-black py-8">
      <div className="flex justify-between items-center px-4">
        <div className="flex flex-col -mb-20 -mt-1">
          {address ? (
            <p className="text-xs">CONNECTED</p>
          ) : (
            <p className="text-xs">NOT CONNECTED</p>
          )}
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/logo.svg" alt="logo" className="w-20" />
          <h1 className="text-xs">MARKETPLACE</h1>
        </div>
      </div>

      {/* Mobile menu */}
    </nav>
  );
};

export default Navbar;
