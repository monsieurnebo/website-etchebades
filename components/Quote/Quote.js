import PropTypes from "prop-types";
import styles from "./quote.module.scss";

function Meta({ season, episode, city }) {
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

function Quote({ quote }) {
  const { text, season, episode, city } = quote;

  return (
    <div>
      <quote className={styles.quote__text}>{text}</quote>
      <Meta season={season} episode={episode} city={city} />
    </div>
  );
}

Quote.propTypes = {
  quote : PropTypes.shape({
    text : PropTypes.string.isRequired,
    season : PropTypes.number,
    episode : PropTypes.number,
    city : PropTypes.string
  })
};

export default Quote;
