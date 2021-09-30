import NextLink from "next/link";
import styles from "./button.module.scss";

export default function Button({ href, children}) {

  return (
    <NextLink href={href} passHref>
      <a className={styles.button} title="Lire une nouvelle citation">
        Une autre
      </a>
    </NextLink>
  );
}


