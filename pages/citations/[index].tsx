import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import PageMeta from "../../components/PageMeta";
import Quote from "../../components/Quote/Quote";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import quotes from "../../quotes/quotes";
import getQuote from "../../quotes/getQuote";
import getRandomQuote from "../../quotes/getRandomQuote";

export const getStaticPaths: GetStaticPaths = async () => {
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
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const quoteIndex = parseInt(params.index, 10); // Make it as a number

  return {
    props : {
      quoteIndex
    }
  };
};

// Make sure that the next quote is not the same as the current one
function getNextQuote(currentQuoteIndex: number) {
  const nextQuote = getRandomQuote();
  const nextQuoteIndex = nextQuote.index;

  if (nextQuoteIndex === currentQuoteIndex) {
    console.log("Next quote is the same as current one !");

    return getNextQuote(currentQuoteIndex);
  } else {
    return nextQuote;
  }
}

type HomeProps = {
  quoteIndex : number
};

export default function Home({ quoteIndex }: HomeProps): JSX.Element {
  const quote = getQuote(quoteIndex);
  const nextQuote = getNextQuote(quoteIndex);
  const randomQuoteSlug = `/citations/${nextQuote.index}`;

  return (
    <Layout>
      <PageMeta
        description={`"${quote.text}"`}
      />

      <Quote quote={quote} />
      <Button href={randomQuoteSlug} />
    </Layout>
  );
}
