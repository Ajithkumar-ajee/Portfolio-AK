import SectionHeading from "./SectionHeading";
import styles from "./Projects.module.scss";

const projects = [
  {
    name: "MyKomatsu",
    category: "Fleet Management Portal",
    description:
      "Developed reusable React components, integrated GraphQL APIs, improved application performance by 20%, and contributed to a microfrontend architecture.",
    tags: ["React", "GraphQL", "Microfrontends"],
  },
  {
    name: "ePass",
    category: "Android App & Website",
    description:
      "Developed features for ePass verification, QR code scanning, and real-time data synchronization across web and mobile applications used for 10K+ verifications per day.",
    tags: ["Web", "Android", "QR code scanning", "Real-time data"],
  },
  {
    name: "Nokkam",
    category: "Android App",
    description:
      "Developed online examination features, question management, and analytics for an application serving 100K+ students.",
    tags: ["Android", "Online examinations", "Analytics"],
  },
];

export default function Projects() {
  return (
    <section className={styles.section} id="projects" aria-labelledby="projects-title">
      <div className={styles.inner}>
        <SectionHeading
          id="projects-title"
          eyebrow="Selected work"
          title="Projects built for real users."
          description="A selection of web and mobile products I have contributed to during my professional experience."
        />

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article className={styles.project} key={project.name}>
              <div className={styles.projectHeader}>
                <span className={styles.projectIndex}>0{index + 1}</span>
                <span className={styles.projectCategory}>{project.category}</span>
              </div>
              <h3>{project.name}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <ul className={styles.technologies} aria-label={`${project.name} technologies and focus`}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
