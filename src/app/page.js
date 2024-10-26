// src/app/page.js
import Head from 'next/head';
import Header from './components/Header';
import QuickLinks from './components/QuickLinks';
import Announcements from './components/Announcements';
import ClassSchedule from './components/ClassSchedule';
import ClassRecordings from './components/ClassRecordings';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Student Portal</title>
      </Head>
      <Header />

      <div className={styles.sectionsWrapper}>
        <div className={styles.section}>
          <Announcements />
          <ClassSchedule />
        </div>
        <div className={styles.section}>
          <QuickLinks />
        </div>
        <div className={styles.section}>
          <ClassRecordings />
        </div>
      </div>

    </div>
  );
}
