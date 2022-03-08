import { NextPage } from "next";
import Link from "next/link";
import styles from "./styles.module.scss";

const Header: NextPage = () => {
  return (
    <nav className={styles.navigation}>
      <Link href="/">
        <a>Malik</a>
      </Link>
      <div className={styles.contact}>
        <Link href="/projects">Projects</Link>
      </div>
    </nav>
  );
};

export default Header;
