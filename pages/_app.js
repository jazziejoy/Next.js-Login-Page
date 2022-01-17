import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="DH7ojo9rkn2t3SWF4LRAwoWqwKLp3hC9OS1t6TQk"
      serverUrl="https://q9gr27nlmw68.usemoralis.com:2053/server"
    >
      {<Component {...pageProps} />}
    </MoralisProvider>
  );
}

export default MyApp;