import Link from "next/link";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="mailto:contact@cyrilbonnet.fr?subject=Une nouvelle etchebade"
        className={styles.footer__link}
      >
        Proposer une etchebade
      </a>
      <Link
        className={styles.footer__link}
        href="/mentions-legales"
      >
        Mentions légales
      </Link>
      <a
        href="https://bot.etchebades.fr"
        className={styles.footer__link}
      >
        Discuter avec l&apos;Etchebot
      </a>
    </footer>
  );
}
