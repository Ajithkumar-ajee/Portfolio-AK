import SectionHeading from "./SectionHeading";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.section} id="about" aria-labelledby="about-title">
      <div className={styles.inner}>
        <SectionHeading
          id="about-title"
          eyebrow="A little about me"
          title="Frontend engineering for web and mobile."
        />
        <div className={styles.content}>
          <p>
            After transitioning into software development, I have built 4.5+ years of
            professional experience creating web and mobile applications with React.js,
            React Native, TypeScript, and JavaScript. I work with reusable UI components,
            RESTful and GraphQL APIs, and application state managed with Redux and Context
            API.
          </p>
          <p>
            My experience includes contributing to microfrontend architecture,
            cross-platform mobile apps, Android release management, and end-to-end
            feature delivery in Agile/Scrum teams—from development and testing through
            deployment and production support.
          </p>
        </div>
        <div className={styles.note}>
          <span className={styles.noteMark} aria-hidden="true">+</span>
          <p>
            <strong>B.E. Mechanical Engineering</strong>
            <br />
            Karpagam Institute of Technology <span aria-hidden="true">·</span> 2013–2017
          </p>
        </div>
      </div>
    </section>
  );
}
