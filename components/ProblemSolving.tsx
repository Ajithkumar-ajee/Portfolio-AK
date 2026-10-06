import SectionHeading from "./SectionHeading";
import styles from "./ProblemSolving.module.scss";

const topics = [
  "Arrays",
  "Strings",
  "Numbers",
  "Maps",
  "Sets",
  "Loops",
  "Searching",
  "Basic algorithms",
  "Problem solving",
];

export default function ProblemSolving() {
  return (
    <section className={styles.section} aria-labelledby="problem-solving-title">
      <div className={styles.inner}>
        <SectionHeading
          id="problem-solving-title"
          eyebrow="Practice"
          title="Keeping problem-solving skills sharp."
          description="I regularly practice JavaScript fundamentals and common problem-solving patterns."
        />
        <ul className={styles.topics}>
          {topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
