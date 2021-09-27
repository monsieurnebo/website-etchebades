import Cors from "cors";
import initMiddleware from "../../lib/initMiddleware";
import quotes from "../../quotes/quotes";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET
    methods : ["GET"]
  })
);

export default async function handler(req, res) {
  // Run cors
  await cors(req, res);

  // Rest of the API logic
  res.json({ quotes });
}
