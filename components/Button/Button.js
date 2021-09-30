import NextLink from "next/link";
import PropTypes from "prop-types";
import styles from "./button.module.scss";

function Button({ href}) {

  return (
    <NextLink href={href} passHref>
      <a className={styles.button} title="Lire une nouvelle citation">
        Une autre
      </a>
    </NextLink>
  );
}

Button.propTypes = {
  href : PropTypes.string.isRequired
};

export default Button;

