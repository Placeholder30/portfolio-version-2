import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <div className="container">
        <Head>
          <title>Malik Abdulaziz</title>
          <meta name="description" content="portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </div>
    </Fragment>
  );
}

export default MyApp;
