import getRandomQuote from "../../quotes/getRandomQuote";

export default function handler(req, res) {
  const quote = getRandomQuote();

  res.status(200).json({ quote });
}
