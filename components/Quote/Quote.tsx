import styles from "./quote.module.scss";

type MetaProps = {
  season?: number,
  episode?: number,
  city?: string
};

type Quote = MetaProps & {
  text: string
}

type QuoteProps = {
  quote: Quote
};

function Meta({ season, episode, city }: MetaProps) {
  if (!season || !episode || !city) {
    return null;
  }

  const text = `Saison ${season} épisode ${episode}, à ${city}`;

  return (
    <p className={styles.quote__meta}>
      {text}
    </p>
  );
}

export default function Quote({ quote }: QuoteProps) {
  const { text, season, episode, city } = quote;

  return (
    <div>
      <blockquote className={styles.quote__text}>{text}</blockquote>
      <Meta season={season} episode={episode} city={city} />
    </div>
  );
}
