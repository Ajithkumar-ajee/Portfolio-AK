"use client";

import { useState } from "react";
import styles from "./SiteHeader.module.scss";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a
          className={styles.brand}
          href="#home"
          aria-label="Ajithkumar V, home"
          onClick={() => setMenuOpen(false)}
        >
          <span className={styles.brandMark} aria-hidden="true">
            AV
          </span>
          <span>Ajithkumar V</span>
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={menuOpen ? styles.menuIconOpen : styles.menuIcon} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>

        <nav
          className={`${styles.navigation} ${menuOpen ? styles.navigationOpen : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              className={styles.navLink}
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className={styles.contactLink}
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
