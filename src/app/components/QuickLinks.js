// src/app/components/QuickLinks.js
"use client";

import { useState } from 'react';
import styles from './Quicklinks.module.css';

export default function QuickLinks() {
  const [showNoClassModal, setShowNoClassModal] = useState(false);

  const handleJoinLiveClassClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setShowNoClassModal(true); // Show the modal
  };

  const closeModal = () => {
    setShowNoClassModal(false);
  };

  return (
    <section className={styles.quickLinksContainer}>
      <h2>Quick Links</h2>

      {/* Modal for "No Live Classes" */}
      {showNoClassModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <h3>No Live Classes</h3>
            <p>There are currently no live classes available.</p>
            <button className={styles.okButton} onClick={closeModal}>OK</button>
          </div>
        </div>
      )}

      <div className={styles.linksContainer}>
        <a href="#" className={`${styles.linkCard} ${styles.canvasLms}`}>
          <div className={styles.icon}>
            <img src="/icons/book.png" alt="LMS Icon" />
          </div>
          <h3 className={styles.h3}>Canvas LMS</h3>
          <p className={styles.p}>Click here to access your LMS portal for assignments, class recordings, and notes.</p>
        </a>

        <a href="#" onClick={handleJoinLiveClassClick} className={`${styles.linkCard} ${styles.joinClass}`}>
          <div className={styles.icon}>
            <img src="/icons/cont.png" alt="Join Live Class Icon" />
          </div>
          <h3 className={styles.h3}>Join Live Class</h3>
          <p className={styles.p}>Class 7 Math is starting in 1 hour, 35 minutes.</p>
        </a>

        <a href="#" className={`${styles.linkCard} ${styles.contactTeacher}`}>
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
