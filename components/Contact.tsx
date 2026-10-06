import SectionHeading from "./SectionHeading";
import styles from "./Contact.module.scss";

const contactOptions = [
  { label: "Email", value: "ajithkumar.ajee@gmail.com", href: "mailto:ajithkumar.ajee@gmail.com" },
  { label: "Phone", value: "+91 8072086115", href: "tel:+918072086115" },
  { label: "LinkedIn", value: "linkedin.com/in/ajithkumar-reactdev", href: "https://linkedin.com/in/ajithkumar-reactdev" },
];

export default function Contact() {
  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
      <div className={styles.inner}>
        <div className={styles.details}>
          <SectionHeading
            id="contact-title"
            eyebrow="Get in touch"
            title="Let’s talk about frontend work."
            description="For opportunities and professional enquiries, reach me directly using the details below."
          />
          <dl className={styles.contactList}>
            {contactOptions.map((option) => (
              <div className={styles.contactItem} key={option.label}>
                <dt>{option.label}</dt>
                <dd>
                  <a href={option.href}>{option.value}</a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
