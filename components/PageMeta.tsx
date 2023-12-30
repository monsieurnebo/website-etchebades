// TODO: to be deleted once moved to "layout.tsx"
import Head from "next/head";

const DEFAULT_META = {
  title : "Citations de Philippe Etchebest - Les Etchebades",
  description : "Découvrez les meilleures citations de Philippe Etchebest, issues de Cauchemard en Cuisine ou Top Chef.",
  imageUrl : "https://etchebades.fr/social-share.jpg"
};

type PageMetaProps = {
  title?: string,
  description?: string,
  imageUrl?: string,
};

export default function PageMeta(props: PageMetaProps) {
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
