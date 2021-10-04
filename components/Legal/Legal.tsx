import styles from "./legal.module.scss";

export default function Legal(): JSX.Element {
  const { title, subtitle, text, link } = styles;
  return (
    <div>
      <h1 className={title}>Mentions légales</h1>
      <h2 className={subtitle}>Hébergement</h2>
      <ul className={text}>
        <li>Netlify, Inc.</li>
        <li>2325 3rd Street, Suite 215, San Francisco, California 94107</li>
        <li><a className={link} href="mailto:support@netlify.com">support@netlify.com</a></li>
      </ul>
      <p className={text}>
        Ce site a été développé par : <a className={link} href="https://cyrilbonnet.fr/" target="_blank" rel="noreferrer">Cyril BONNET, Webmaster Freelance Strasbourg, création site internet & SEO</a>.
      </p>
      <h2 className={subtitle}>{"Droits d'auteur"}</h2>
      <p className={text}>{"Photographie de Philippe Etchebest par © M6 (ce site n'a aucun but lucratif, pas taper SVP)."}</p>
    </div>
  );
}
