import type { Metadata } from 'next'
import { Noto_Serif } from 'next/font/google'

import Link from "next/link";
import Footer from "./components/Footer";

import "../styles/reset.scss"
import styles from "./layout.module.scss";


const font = Noto_Serif({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Citations de Philippe Etchebest - Les Etchebades',
  description: 'Découvrez les meilleures citations de Philippe Etchebest, issues de Cauchemard en Cuisine ou Top Chef.',
  // TODO: add image "https://etchebades.fr/social-share.jpg"
  // TODO add all from "PageMeta.tsx"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className={styles.layout}>
          <h1>
            <Link
              className={styles.title__link}
              href="/"
              title="Retourner à la page d'accueil"
            >
              Les Etchebades
            </Link>
          </h1>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
