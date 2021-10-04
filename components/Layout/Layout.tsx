import Link from "next/link";
import Footer from "../Footer/Footer";
import styles from "./layout.module.scss";

type LayoutProps = {
  children : JSX.Element
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className={styles.layout}>
      <h1>
        <Link passHref href="/">
          <a className={styles.title__link} title="Retourner à la page d'accueil">
            Les Etchebades
          </a>
        </Link>
      </h1>
      {children}
      <Footer />
    </div>
  );
}
