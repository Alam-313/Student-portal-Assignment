// src/app/components/ClassRecordings.js
"use client";

import styles from './ClassRecordings.module.css';

export default function ClassRecordings() {
  const recordings = [
    { 
      id: 1, 
      subject: "Algebraic Equations", 
      date: "24th October, 2024", 
      thumbnail: "/images/algebra.png" 
    },
    { 
      id: 2, 
      subject: "Inert Gases", 
      date: "24th October, 2024", 
      thumbnail: "/images/inert.png" 
    },
    { 
      id: 3, 
      subject: "Fundamentals of Organic Chemistry", 
      date: "24th October, 2024", 
      thumbnail: "/images/organic.png" 
    },
    { 
      id: 4, 
      subject: "Trigonometry 101", 
      date: "24th October, 2024", 
      thumbnail: "/images/trigo.png" 
    },
  ];

  return (
    <section className={styles.classRecordingsContainer}>
      <h2>Access Class Recordings</h2>
      <input 
        type="text" 
        placeholder="Search for class recordings" 
        className={styles.searchInput} 
      />
      <div className={styles.recordingList}>
        {recordings.map((recording) => (
          <div key={recording.id} className={styles.recordingCard}>
            <img 
              src={recording.thumbnail} 
              alt={`${recording.subject} thumbnail`} 
              className={styles.thumbnail} 
            />
            <div className={styles.details}>
              <h3>{recording.subject}</h3>
              <p>{recording.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
