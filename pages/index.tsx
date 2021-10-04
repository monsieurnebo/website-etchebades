import React from "react";
import PageMeta from "../components/PageMeta";
import Quote from "../components/Quote/Quote";
import Button from "../components/Button/Button";
import Layout from "../components/Layout/Layout";
import getRandomQuote from "../quotes/getRandomQuote";

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

export default function Home(): JSX.Element {
  const quote = getRandomQuote();
  const quoteIndex = quote.index;
  const nextQuote = getNextQuote(quoteIndex);
  const randomQuoteSlug = `/citations/${nextQuote.index}`;

  return (
    <Layout>
      <PageMeta />
      <Quote quote={quote} />
      <Button href={randomQuoteSlug} />
    </Layout>
  );
}
