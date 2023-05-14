import "@/styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ThetaTestnet } from "@thirdweb-dev/chains";

function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={ThetaTestnet}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default App;
