import quotes from "../data/quotes";

// TODO: make it a global type
type Quote = {
  text: string,
  city?: string,
  episodeId?: number,
  season?: number,
  episode?: number
};

/**
 * Get a quote based on its index
 * @param {number} index
 * @returns {object} quote
 */
export default function getQuoteFromIndex(index: number) : Quote {
  return quotes[index];
}

