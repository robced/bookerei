import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StateContext } from "../context/StateContext";
import Layout from "../components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
