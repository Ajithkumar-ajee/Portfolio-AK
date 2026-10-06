import SectionHeading from "./SectionHeading";
import styles from "./Experience.module.scss";

const roles = [
  {
    title: "Software Engineer",
    company: "Softura Private Limited",
    period: "Oct 2024 – Aug 2026",
    details: [
      "Developed and maintained enterprise web applications using React.js, TypeScript, JavaScript, HTML5, and SCSS.",
      "Built reusable UI components to improve consistency and simplify application maintenance.",
      "Integrated RESTful APIs to fetch, process, and manage business data across enterprise applications.",
      "Implemented Redux and Context API for predictable application state management.",
      "Reduced page load time by 20% through lazy loading and code splitting.",
      "Leveraged GitHub Copilot to improve productivity, reducing repetitive coding effort by 30%.",
      "Collaborated with designers, backend developers, and QA engineers in Agile/Scrum environments.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Vertace Consultants / Naduvan Technologies",
    period: "Dec 2021 – Sep 2024",
    details: [
      "Built enterprise web applications to streamline internal business operations using React.js, JavaScript, HTML5, and CSS3.",
      "Developed and maintained cross-platform mobile applications using React Native.",
      "Developed reusable React components and integrated RESTful and GraphQL APIs based on project requirements.",
      "Managed application state using Redux and improved overall application responsiveness.",
      "Managed 10+ Android application releases through Google Play Console, including versioning, production deployment, and release management.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      className={styles.section}
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className={styles.inner}>
        <SectionHeading
          id="experience-title"
          eyebrow="Professional experience"
          title="4.5+ years building web and mobile applications."
          description="Professional experience delivering React.js and React Native applications, collaborating across development, QA, design, and backend teams."
        />
        <ol className={styles.timeline}>
          {roles.map((role) => (
            <li className={styles.item} key={role.company}>
              <span className={styles.marker} aria-hidden="true" />
              <div className={styles.itemHead}>
                <h3>{role.company}</h3>
                <p className={styles.period}>{role.period}</p>
              </div>
              <p className={styles.title}>{role.title}</p>
              <ul className={styles.details}>
                {role.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
