import styles from '../styles/Home.module.css';

import Header from '../components/Header';
import Profile from '../components/Profile'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.containerInfo}>
        <Profile />
      </div>
    </div>
  )
}
