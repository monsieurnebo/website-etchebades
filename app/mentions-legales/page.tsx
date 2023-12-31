import styles from "./legal.module.scss"

export default function LegalPage() {
  const { title, subtitle, text, link } = styles;

  return (
    <div>
      <h1 className={title}>Mentions légales</h1>
      <h2 className={subtitle}>Hébergement</h2>
      <ul className={text}>
        <li>Vercel Inc.</li>
        <li>440 N Barranca Ave #4133</li>
        <li>Covina, CA 91723</li>
        <li><a className={link} href="mailto:contact@vercel.com">contact@vercel.com</a></li>
      </ul>
      <p className={text}>
        Ce site a été développé par : <a className={link} href="https://cyrilbonnet.fr/" target="_blank" rel="noreferrer">Cyril BONNET</a>.
      </p>
      <h2 className={subtitle}>{"Droits d'auteur"}</h2>
      <p className={text}>{"Photographie de Philippe Etchebest par © M6 (ce site n'a aucun but lucratif, pas taper SVP)."}</p>
    </div>
  );
}
