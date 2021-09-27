import NextLink from "next/link";
import quotes from "../../content/quotes";
import styles from "./newquotebutton.module.scss";

export default function NewQuoteButton() {
  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuoteSlug = `/citations/${randomQuoteIndex}`;

  return (
    <NextLink href={randomQuoteSlug} passHref>
      <a className={styles.button} title="Lire une nouvelle citation">
        Une autre
      </a>
    </NextLink>
  );
}


