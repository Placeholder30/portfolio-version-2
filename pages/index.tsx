import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.scss";
import Footer from "../components/footer";
import Header from "../components/header";
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.hello}>Hello, I am</div>
        <h1>MALIK ABDULAZIZ.</h1>
        <p>
          A Full-stack Engineer that is passionate about Improving
          people&rsquo;s lives with code. When I am not writing JavaScript with
          my favorite framework <span>{"React"}</span>, you&rsquo;ll find me on
          twitter talking about why Batman should be your favorite superhero.
        </p>
        <div className={styles.hitme}>
          <a href="mailto:malikoabdulaziz@gmail.com">Let&rsquo;s chat</a>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
