import quotes from "./quotes";

type Quote = {
  text: string,
  city?: string,
  episodeId?: number,
  season?: number,
  episode?: number,
  index : number
};

export default function getRandomQuote(): Quote {
  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomQuoteIndex];
  return {
    ...randomQuote,
    index : randomQuoteIndex
  };
}

