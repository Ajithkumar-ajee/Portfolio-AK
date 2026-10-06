import SectionHeading from "./SectionHeading";
import styles from "./Skills.module.scss";

const skillGroups = [
  {
    name: "Frontend",
    skills: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS"],
  },
  {
    name: "State management",
    skills: ["Redux", "Redux Toolkit", "Context API"],
  },
  {
    name: "Backend & APIs",
    skills: ["Node.js", "Prisma", "PostgreSQL", "RESTful APIs", "GraphQL", "Axios"],
  },
  {
    name: "Testing & UI",
    skills: ["React Testing Library", "KendoReact", "Ant Design", "NativeBase"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "GitHub Copilot", "Vite", "npm", "VS Code"],
  },
  {
    name: "Mobile",
    skills: ["React Native", "Android", "CodePush", "Firebase Cloud Messaging", "Google Play Console"],
  },
  {
    name: "Concepts",
    skills: [
      "Lazy loading",
      "Code splitting",
      "Performance optimization",
      "Microfrontend",
      "Responsive design",
      "Reusable components",
      "CI/CD",
      "Agile/Scrum",
    ],
  },
];

export default function Skills() {
  return (
    <section className={styles.section} id="skills" aria-labelledby="skills-title">
      <div className={styles.inner}>
        <SectionHeading
          id="skills-title"
          eyebrow="Tools & technologies"
          title="A practical frontend toolkit."
          description="Technologies and concepts I have worked with across web and mobile development."
        />
        <div className={styles.grid}>
          {skillGroups.map((group, index) => (
            <article className={styles.group} key={group.name}>
              <div className={styles.groupHeading}>
                <span className={styles.groupIndex}>0{index + 1}</span>
                <h3>{group.name}</h3>
              </div>
              <ul className={styles.skillList}>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
