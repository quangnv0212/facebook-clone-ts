import { AppProps } from "next/app";
import { SWRConfig } from "swr";
import "./globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
