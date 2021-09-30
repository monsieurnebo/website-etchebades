import quotes from "./quotes";

export default function getRandomQuote() {
  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomQuoteIndex];
  return {
    ...randomQuote,
    index : randomQuoteIndex
  };
}

