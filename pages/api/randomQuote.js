import quotes from "../../content/quotes";

export default function handler(req, res) {
  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomQuoteIndex];

  res.status(200).json({ quote });
}
