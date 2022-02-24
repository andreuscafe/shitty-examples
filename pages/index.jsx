import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import { useAppContext } from "../context/AppContext";

export default function Home() {
  const { setCurrentExample } = useAppContext();

  useEffect(() => {
    setCurrentExample({});
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Shitty examples by @andreuscafe</title>
        <meta name="description" content="CSS and JS creative examples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Shitty examples</h1>

        <div className={styles.description}>
          By{" "}
          <a
            href="https://twitter.com/AndreusCafe"
            target="_blank"
            rel="noopener noreferrer"
          >
            @andreuscafe
          </a>
        </div>

        <div className={styles.grid}>
          <Link href="/examples/scroll-video">
            <a className={styles.card}>
              <h2>Scroll controlled video</h2>
              <p>Using react-scrollmagic</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/AndreusCafe"
          target="_blank"
          rel="noopener noreferrer"
        >
          @andreuscafe
        </a>
      </footer>
    </div>
  );
}
