import styles from "./SectionHeading.module.scss";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  );
}
