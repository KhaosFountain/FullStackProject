import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1>
          Welcome to SERVICES PAGE
          {/* will change to the correct title later on */}
        </h1>
      </div>

      {/* <main className={styles.main}>

        <div className={styles.grid}>
          <a href="http://localhost:3000/car-wash" className={styles.card}>
            <h2>Car wash </h2>
          </a>
        </div> 
      </main> */}

      <section className={styles.bubble}>
        <h2>Car wash</h2>
        <p>
          This is the car wash section here we will contain link to other page
          about this topic
        </p>
      </section>

      <section className={styles.pw}>
        <h2>Power Washing</h2>
        <p>
          This is the Power Washing section here we will contain link to other
          page about this topic
        </p>
      </section>
      
      <section className={styles.spacer}>
        <h2>Electrician</h2>
        <p>
          This is the Electrician section here we will contain link to other
          page about this topic
        </p>
      </section>

      <section className={styles.section}>
        <h2>Plumber</h2>
        <p>
          This is the Plumber section here we will contain link to other page
          about this topic
        </p>
      </section>
    </div>
  );
}
