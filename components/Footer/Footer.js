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
        href="/mentions-legales"
        passHref
      >
        <a className={styles.footer__link}>Mentions légales</a>
      </Link>
      <a
        href="https://twitter.com/etchebades"
        className={styles.footer__link}
      >
        Recevez vos citations sur Twitter
      </a>
    </footer>
  );
}
