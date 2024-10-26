// src/app/components/Header.js
"use client";

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/Logo.png" alt="ConnectEd Logo" />
        {/* <span>ConnectEd</span> */}
      </div>
      <div className={styles.title}>
        <h1>Student Portal</h1>
      </div>
      <div className={styles.greeting}>
        <p>Hello, Gabrisa!</p>
        <span>Class 7, Math + Science</span>
      </div>
    </header>
  );
}
