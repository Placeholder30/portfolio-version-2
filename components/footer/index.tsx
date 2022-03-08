import { NextPage } from "next";
import Link from "next/link";
import styles from "./styles.module.scss";
const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <a
            href="https://github.com/placeholder30"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/abdulaziz-malik-o"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>

        <li>Resume</li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
