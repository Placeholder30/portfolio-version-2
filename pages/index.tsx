import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Malik Abdulaziz</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navigation}>
        <div>Malik</div>
        <div className={styles.contact}>
          <a href="mailto:malikoabdulaziz@gmail.com">Contact</a>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.hello}>Hello, I am</div>
        <h1>MALIK ABDULAZIZ.</h1>
        <p>
          A Full-stack Engineer that is passionate about Improving
          people&rsquo;s lives with code. When I am not writing JavaScript with
          my favorite framework <span>{"React"}</span>, you&rsquo;ll find me on
          twitter talking about why Batman is the greatest superhero ever.
        </p>
        <div className={styles.hitme}>
          <a href="mailto:malikoabdulaziz@gmail.com">Let&rsquo;s chat</a>
        </div>
      </main>

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
          <li>Projects</li>
          <li>Resume</li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
