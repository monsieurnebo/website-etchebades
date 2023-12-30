import getQuoteFromIndex from "../../../helpers/getQuoteFromIndex";
import getRandomQuote from "../../../helpers/getRandomQuote";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  const quote = id
    ? getQuoteFromIndex(Number(id))
    : getRandomQuote()

  return Response.json({ quote })
}
