import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
      <h1>
        Welcome to SERVICES PAGE 
          {/* will change to the correct title later on */}
      </h1>
      </div>

      <main className={styles.main}>

        <div className={styles.grid}>
          <a href="http://localhost:3000/car-wash" className={styles.card}>
            <h2>Car wash </h2>
          </a>

          <a href="http://localhost:3000/power-washing" className={styles.card}>
            <h2>Power Washing </h2>
          </a>

          <a
            href="http://localhost:3000/electrician"className={styles.card}>
            <h2>Electrician</h2>
          </a>

          <a
            href="http://localhost:3000/plumber"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Plumber</h2>
          </a>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
