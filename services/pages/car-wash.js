import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";


export default function home(){
    return(
        <div className={styles.section}>
        <section className={styles.flexSection1}>
          <h2>Car wash</h2>
          <p>This is the car wash section here we will contain link to other page about this topic</p>
          <div className={styles.curve}></div>
        </section>

        <section className={styles.flexSection2}>
          <h2>Power Washing</h2>
          <p>This is the Power Washing section here we will contain link to other page about this topic</p>
        </section>

        <section className={styles.flexSection3}> 
          <h2>Electrician</h2>
          <p>This is the Electrician section here we will contain link to other page about this topic</p>
        </section>

        <section className={styles.flexSectio4}>
          <h2>Plumber</h2>
          <p>This is the Plumber section here we will contain link to other page about this topic</p>
        </section>
      </div>
    )
}