import styles from '../styles/Home.module.css';

import Head from 'next/head'

import { Header } from '../components/Header';
import Profile from '../components/Profile';
import Info from '../components/Info';
import { HeaderProvider } from '../contexts/HeaderContext';

export default function Home() {
  return ( 
      <div className={styles.container}>
        <Head>
         <title>Gabriel Azevedo</title>
         <link rel="preconnect" href="https://fonts.gstatic.com"/>
         <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet"/>
        </Head>
        <HeaderProvider>
        <Header />
        <div className={styles.containerInfo}>
          <Profile />
          <Info />  
        </div>
        </HeaderProvider>
      </div>
  )
}
