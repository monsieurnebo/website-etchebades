import Footer from "../Footer/Footer";
import styles from "./layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>
        Les Etchebades
      </h1>
      {children}
      <Footer />
    </div>
  );
}
