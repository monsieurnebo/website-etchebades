import Button from "@/components/Button"
import Quote from "@/components/Quote"
import quotes from "@/data/quotes"
import getQuoteFromIndex from "@/helpers/getQuoteFromIndex"
import getRandomQuote from "@/helpers/getRandomQuote"

export async function generateStaticParams() {

  console.log('\n')
  return quotes.map((quote, index) => {
    console.log(`## Building static single quote page #${index}`)

    return {
      slug: index,
    }
  })
}

// Make sure that the next quote is not the same as the current one
function getNextQuote(currentQuoteIndex: number) {
  const nextQuote = getRandomQuote();
  const nextQuoteIndex = nextQuote.index;

  if (nextQuoteIndex === currentQuoteIndex) {
    console.log("Next quote is the same as current one !");

    return getNextQuote(currentQuoteIndex);
  } else {
    return nextQuote;
  }
}

export default function SingleQuote({ params }: { params: { index: string } }) {
  const index = Number(params.index)

  const quote = getQuoteFromIndex(index);
  const nextQuote = getNextQuote(index);
  const randomQuoteSlug = `/citations/${nextQuote.index}`;

  return (
    <>
      <Quote quote={quote} />
      <Button href={randomQuoteSlug} />
    </>
  )
}
