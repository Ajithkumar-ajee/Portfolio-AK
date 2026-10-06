import styles from "./SiteFooter.module.scss";

const profiles = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ajithkumar-reactdev",
  },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <a className={styles.identity} href="#home">
          <strong>Ajithkumar V</strong>
          <span>React.js Developer</span>
        </a>
        <div className={styles.links}>
          {profiles.map((profile) => (
            <a href={profile.href} key={profile.label} target="_blank" rel="noreferrer">
              {profile.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Ajithkumar V
        </p>
      </div>
    </footer>
  );
}
