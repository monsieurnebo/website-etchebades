import quotes from "./quotes";

/**
 * The id is in fact the INDEX
 * TODO: refactor id => index everywhere
 */
export default function getQuote(index) {
  return quotes[index];
}

