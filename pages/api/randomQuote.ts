import type { NextApiRequest, NextApiResponse } from "next";
import getRandomQuote from "../../quotes/getRandomQuote";

type Quote = {
  text: string,
  city?: string,
  episodeId?: number,
  season?: number,
  episode?: number
};

type Data = {
  quote : Quote
};

function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  const quote = getRandomQuote();

  res.status(200).json({ quote });
}

export default handler;
