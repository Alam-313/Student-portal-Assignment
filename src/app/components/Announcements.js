// src/app/components/Announcements.js
"use client";

import styles from './Announcements.module.css';

export default function Announcements() {
  return (
    <div className={styles.announcementsContainer}>
      <h3>Announcements</h3>
      
      {/* First Section */}
      <div className={styles.announcementSection}>
        {/* <h4>Upcoming Holidays</h4> */}
        <div className={styles.announcementItem}>
          <img src="/sun.png" alt="Holiday Icon" className={styles.icon} />
          <p>On account of Independence Day, August 15th will be a holiday.</p>
        </div>
      </div>
      
      {/* Gap between sections */}
      <div className={styles.sectionGap} />

      {/* Second Section */}
      <div className={styles.announcementSection}>
        {/* <h4>Reminders</h4> */}
        <div className={styles.announcementItem}>
          <img src="/clipboard-text.png" alt="Assignment Icon" className={styles.icon} />
          <p>Reminder to finish your assignments and submit them by Monday.</p>
        </div>
      </div>
    </div>
  );
}
