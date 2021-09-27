import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="mailto:contact@cyrilbonnet.fr?subject=Une nouvelle etchebade"
        className={styles.footer__proposal}
      >
        Proposer une etchebade
      </a>
      <a
        href="http://cyrilbonnet.fr"
        target="_blank"
        className={styles.footer__credit}
        rel="noreferrer"
      >
        Made with <span className={styles.footer__credit__heart}>❤</span> from Strasbourg
      </a>
    </footer>
  );
}
