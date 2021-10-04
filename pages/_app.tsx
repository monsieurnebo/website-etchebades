import type { AppProps } from "next/app";
import "../style/reset.scss";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
