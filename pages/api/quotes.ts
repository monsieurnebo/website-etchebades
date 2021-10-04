import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import initMiddleware from "../../lib/initMiddleware";
import quotes from "../../quotes/quotes";

type Quote = {
  text: string,
  city?: string,
  episodeId?: number,
  season?: number,
  episode?: number
};

type Quotes = Array<Quote>;

type Data = {
  quotes: Quotes
};

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET
    methods : ["GET"]
  })
);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  // Run cors
  await cors(req, res);

  // Rest of the API logic
  res.json({ quotes });
}


export default handler;
