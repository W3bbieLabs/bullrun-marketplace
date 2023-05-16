import "@/styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";



function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain= {{ chainId: 365,
      rpc:["<https://eth-rpc-api-testnet.thetatoken.org/rpc]>"],
      
      nativeCurrency: {
        decimals: 18,
        name: "TFUEL",
        symbol: "TFUEL",
      },
      }}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default App;