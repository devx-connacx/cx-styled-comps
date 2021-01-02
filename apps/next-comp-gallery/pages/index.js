import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import { CxStyButton } from '@cx-styled/react-elements'
// import { CxStyMainDiv } from '@cx-styled/react-containers'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Components Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <CxStyButton>Like</CxStyButton>
        {/* <CxStyMainDiv>
          <CxStyButton>Like</CxStyButton>
        </CxStyMainDiv> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {'Connacx'}
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
      </footer>
    </div>
  )
};

export default Home
