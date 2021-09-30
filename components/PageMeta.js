import Head from "next/head";
import PropTypes from "prop-types";

const DEFAULT_META = {
  title : "Citations de Philippe Etchebest - Les Etchebades",
  description : "Découvrez les meilleures citations de Philippe Etchebest, issues de Cauchemard en Cuisine ou Top Chef.",
  imageUrl : "https://etchebades.fr/social-share.jpg"
};

function PageMeta(props) {
  let { title, description, imageUrl } = props || {};

  if (!title) {
    title = DEFAULT_META.title;
  }

  if (!description) {
    description = DEFAULT_META.description;
  }

  if (!imageUrl) {
    imageUrl = DEFAULT_META.imageUrl;
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="og:image" content={imageUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

PageMeta.propTypes = {
  title : PropTypes.string,
  description : PropTypes.string,
  imageUrl : PropTypes.string,
};

export default PageMeta;
