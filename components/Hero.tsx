import styles from "./Hero.module.scss";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ajithkumar-reactdev",
  },
];

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroInner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span className={styles.statusDot} aria-hidden="true" />
            Chennai, Tamil Nadu <span aria-hidden="true">/</span> 4.5+ years in software
          </p>
          <h1 id="hero-title">
            AJITHKUMAR <span>V</span>
          </h1>
          <p className={styles.role}>React.js Developer | Frontend Developer</p>
          <p className={styles.intro}>
            React.js Developer with 4.5+ years of experience building scalable web and
            mobile applications with React, React Native, TypeScript, and JavaScript.
          </p>

          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#projects">
              View projects <span aria-hidden="true">↗</span>
            </a>
            <a className={styles.secondaryButton} href="/Ajithkumar-CV.pdf" download>
              Download resume <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className={styles.socials} aria-label="Social profiles">
            <span className={styles.socialLabel}>Find me on</span>
            {socialLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noreferrer"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>

        <aside className={styles.focusCard} aria-label="Professional focus">
          <div className={styles.cardTop}>
            <span className={styles.cardLabel}>PROFILE</span>
            <span className={styles.cardIndex}>01 / 04</span>
          </div>
          <div className={styles.cardMain}>
            <span className={styles.cardCaption}>Building for</span>
            <p>Web <span>&</span> mobile</p>
          </div>
          <div className={styles.cardFooter}>
            <div>
              <span className={styles.cardCaption}>Core focus</span>
              <strong>React · TypeScript · Redux</strong>
            </div>
            <span className={styles.cardArrow} aria-hidden="true">↗</span>
          </div>
        </aside>
      </div>
      <div className={styles.heroBottom} aria-hidden="true">
        <span>React.js · React Native · Frontend development</span>
        <span>Scroll to explore <b>↓</b></span>
      </div>
    </section>
  );
}
