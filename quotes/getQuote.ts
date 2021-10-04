import quotes from "./quotes";

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
export default function getQuote(index: number) : Quote {
  return quotes[index];
}

