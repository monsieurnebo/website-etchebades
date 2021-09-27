import React from "react";
import Head from "next/head";
import Quote from "../components/Quote/Quote";
import NewQuoteButton from "../components/NewQuoteButton/NewQuoteButton";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Les Etchebades - Les meilleures citations de Philippe Etchebest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Quote quote={quote} /> */}
      <NewQuoteButton />
    </Layout>
  );
}
