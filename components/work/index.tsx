import { NextPage } from "next";
import styles from "./styles.module.scss";

interface CardProps {
  project: project;
}
type project = {
  title: string;
  summary: string;
  url: string;
  stack: string[];
};

const Work: NextPage = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Featured</h1>

      <div className={styles.project}>
        {projects.map((project, i) => (
          <Card project={project} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Work;

const Card: React.FC<CardProps> = ({ project }) => {
  return (
    <div className={styles.card}>
      <h2>
        <a href={project.url} target="_blank" rel="noreferrer">
          {project.title}
        </a>
      </h2>
      <p>{project.summary}</p>

      <ul>
        {project.stack.map((project, i) => (
          <li key={i}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

const projects = [
  {
    title: "Lekki Store",
    summary: ` An ecommerce site built with React and styled with styled components.
The backend was built with NodeJS on the express framework with Postgres
as the database of choice. A user can register, login, place an order
and view all orders.`,
    url: "https://lekki-store.netlify.app/",
    stack: ["React", "NodeJS", "Postgres"],
  },

  {
    title: "Trimmer",
    summary: `A url shortener app built with React Express and Redis. Enter your long url and get a shortened and more readable one is returned. when a user clicks on the short url, they're automatically forwarded to the original url.`,
    url: "https://trimmer.netlify.app/",
    stack: ["React", "Express", "Redis"],
  },
  {
    title: "Social Media Feed",
    summary: `This is a social media feed, one of the first projects I made. I got to practice CSS grid and Flexbox, I also used JavaScript to enable the light and dark mode toggle functionality, and leveraged the cascade to enable dark mode styles.`,
    url: "https://placeholder30.github.io/social-media-feed/",
    stack: ["HTML", "CSS", "JS"],
  },
];
