// src/app/components/ClassSchedule.js
"use client";

import styles from './ClassSchedule.module.css';

export default function ClassSchedule() {
  const classes = [
    { subject: 'Science', time: '5:00 - 5:50 PM', date: 'Yesterday' },
    { subject: 'Science', time: '6:30 - 7:15 PM', date: 'Today' },
    { subject: 'Science', time: '5:00 - 5:50 PM', date: 'Tomorrow' },
    { subject: 'Science', time: '5:00 - 5:50 PM', date: '23rd Sept, 2024' },
  ];

  return (
    <div className={styles.classScheduleContainer}>
      <h3>Your Class Schedule</h3>
      {classes.map((classItem, index) => (
        <div key={index} className={`${styles.classItem} ${index === 1 ? styles.current : ''}`}>
          <div className={styles.classDetails}>
            <span className={index % 2 === 0 ? styles.blueText : styles.purpleText}>
              {classItem.subject} | Live Class
            </span>
            <p>{classItem.date}</p>
          </div>
          <div className={styles.classTime}>
            <p>{classItem.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
