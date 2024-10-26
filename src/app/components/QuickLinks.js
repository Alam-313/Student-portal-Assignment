// src/app/components/QuickLinks.js
"use client";

import styles from './QuickLinks.module.css';

export default function QuickLinks() {
  return (
    <section className={styles.quickLinksContainer}>
      <h2>Quick Links</h2>
      <div className={styles.linksContainer}>
        
        <a href="https://your-lms-url.com" className={`${styles.linkCard} ${styles.canvasLms}`}>
          <div className={styles.icon}>
            <img src="/icons/book.png" alt="LMS Icon" />
          </div>
          <h3 className={styles.h3}>Canvas LMS</h3>
          <p className={styles.p}>Click here to access your LMS portal for assignments, class recordings, and notes.</p>
        </a>

        <a href="https://your-live-class-url.com" className={`${styles.linkCard} ${styles.joinClass}`}>
          <div className={styles.icon}>
            <img src="/icons/cont.png" alt="Join Live Class Icon" />
          </div>
          <h3 className={styles.h3}>Join Live Class</h3>
          <p className={styles.p}>Class 7 Math is starting in 1 hour, 35 minutes.</p>
        </a>

        <a href="https://your-contact-teacher-url.com" className={`${styles.linkCard} ${styles.contactTeacher}`}>
          <div className={styles.icon}>
            <img src="/icons/whatsap.png" alt="Contact Teacher Icon" />
          </div>
          <h3 className={styles.h3}>Contact Teacher</h3>
          <p className={styles.p}>Click here to contact your teacher for any doubts or concerns.</p>
        </a>

      </div>
    </section>
  );
}
