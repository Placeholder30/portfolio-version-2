import { NextPage } from "next";
import styles from "./styles.module.scss";
const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>About Me!</h1>
      <p>
        I&rsquo;ve always been a fan of tech, I used to fiddle with my android
        devices when I was younger and install custom OS&rsquo;s I found on XDA,
        but I had to go the long way around to get to software developement. I
        studied Quantity Surveying in Uni and found myself in the civil service.
        After a couple of years, I quickly became bored with the unchallenging
        nature of work there, so i decided to learn how to code.
      </p>

      <p>
        I am self taught, so that took a bit of time, but i managed to teach
        myself React, Node, Typescript and Databases like MongoDB and Postgres.
        When no one is looking, I like to call myself a NodeJS fanboy and I
        think it is the best thing since sliced bread.
      </p>
      <p>
        Away from technology, I like to watch sports and racing. I&lsquo;m a big
        fan of Redbull Racing Formula 1 team, and I am also a retired Manchester
        United fan. I enjoy a bit of tennis too. Oh, I also intend to adopt a
        cat this year!
      </p>
    </div>
  );
};

export default About;
