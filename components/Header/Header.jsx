import Link from "next/link";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>Home</a>
      </Link>
    </header>
  );
};
