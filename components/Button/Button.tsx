import Link from "next/link";
import styles from "./button.module.scss";

type ButtonProps = {
  href: string
};

function Button({ href }: ButtonProps) {

  return (
    <Link
      className={styles.button}
      href={href}
      title="Lire une nouvelle citation"
    >
      Une autre
    </Link>
  );
}

export default Button;

