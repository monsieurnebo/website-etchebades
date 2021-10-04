import NextLink from "next/link";
import styles from "./button.module.scss";

type ButtonProps = {
  href: string
};

function Button({ href }: ButtonProps): JSX.Element {

  return (
    <NextLink href={href} passHref>
      <a className={styles.button} title="Lire une nouvelle citation">
        Une autre
      </a>
    </NextLink>
  );
}

export default Button;

