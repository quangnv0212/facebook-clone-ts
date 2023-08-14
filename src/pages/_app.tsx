import { AppProps } from "next/app";
import { SWRConfig } from "swr";
import "./globals.css";
import axiosClient from "@/api-client/axios-client";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axiosClient.get(url),
        shouldRetryOnError: false,
      }}
    >
      <Component {...pageProps} />;
    </SWRConfig>
  );
}

export default MyApp;
