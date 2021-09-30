import quotes from "./quotes";

/**
 * Get a quote based on its index
 * @param {number} index
 * @returns {object} quote
 */
export default function getQuote(index) {
  return quotes[index];
}

