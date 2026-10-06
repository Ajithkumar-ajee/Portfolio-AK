import styles from "./Resume.module.scss";

export default function Resume() {
  return (
    <section className={styles.section} aria-labelledby="resume-title">
      <div className={styles.inner}>
        <div>
          <p className={styles.eyebrow}>Resume</p>
          <h2 id="resume-title">Want to know more about my experience?</h2>
        </div>
        <a className={styles.button} href="/Ajithkumar-CV.pdf" download>
          Download resume <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
