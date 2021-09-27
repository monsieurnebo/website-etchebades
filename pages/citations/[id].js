import React from "react";
import Head from "next/head";
import Quote from "../../components/Quote/Quote";
import NewQuoteButton from "../../components/NewQuoteButton/NewQuoteButton";
import Layout from "../../components/Layout/Layout";
import quotes from "../../content/quotes";

export async function getStaticPaths() {
  const paths = quotes.map((quote, index) => {
    return {
      params : {
        id : `${index}`
      }
    };
  });

  return {
    paths,
    fallback : false
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const quoteIndex = params.id;

  return {
    props : {
      quoteIndex
    }
  };
}

export default function Home({ quoteIndex }) {
  const quote = quotes[quoteIndex];

  return (
    <Layout>
      <Head>
        <title>Les Etchebades - Les meilleures citations de Philippe Etchebest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Quote quote={quote} />
      <NewQuoteButton />
    </Layout>
  );
}
