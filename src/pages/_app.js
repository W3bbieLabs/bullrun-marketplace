import "@/styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const activeChain = "theta";

function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default App;