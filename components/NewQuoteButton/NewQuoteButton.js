import NextLink from "next/link";
import getRandomQuote from "../../quotes/getRandomQuote";
import styles from "./newquotebutton.module.scss";

export default function NewQuoteButton() {
  const randomQuote = getRandomQuote();
  const randomQuoteId = randomQuote.id;
  const randomQuoteSlug = `/citations/${randomQuoteId}`;

  return (
    <NextLink href={randomQuoteSlug} passHref>
      <a className={styles.button} title="Lire une nouvelle citation">
        Une autre
      </a>
    </NextLink>
  );
}


