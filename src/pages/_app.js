import "@/styles/globals.css";
import { ThetaTestnet } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";

function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={ThetaTestnet}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default App;
