import React from "react";
import Head from "next/head";
import Quote from "../../components/Quote/Quote";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import quotes from "../../quotes/quotes";
import getQuote from "../../quotes/getQuote";
import getRandomQuote from "../../quotes/getRandomQuote";

export async function getStaticPaths() {
  const paths = quotes.map((quote, index) => {
    return {
      params : {
        index : `${index}`
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
  const quoteIndex = parseInt(params.index, 10); // Make it as a number

  return {
    props : {
      quoteIndex
    }
  };
}

// Make sure that the next quote is not the same as the current one
function getNextQuote(currentQuoteIndex) {
  const nextQuote = getRandomQuote();
  const nextQuoteIndex = nextQuote.index;

  if (nextQuoteIndex === currentQuoteIndex) {
    console.log("Next quote is the same as current one !");

    return getNextQuote(currentQuoteIndex);
  } else {
    return nextQuote;
  }
}

export default function Home({ quoteIndex }) {
  const quote = getQuote(quoteIndex);
  const nextQuote = getNextQuote(quoteIndex);
  const randomQuoteSlug = `/citations/${nextQuote.index}`;

  return (
    <Layout>
      <Head>
        <title>Les Etchebades - Les meilleures citations de Philippe Etchebest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Quote quote={quote} />
      <Button href={randomQuoteSlug} />
    </Layout>
  );
}
