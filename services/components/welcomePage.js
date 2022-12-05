import styles from "../styles/Home.module.css";
import Image from "next/image";
import carValetImage from "../styles/car-valet-cork.jpg";
import Link from "next/link";

export default function home(){
    return (
        <section className={styles.welcome}>
        <h1 className={styles.welcomeTitle}>
          Welcome to SERVICES PAGE
          {/* will change to the correct title later on*/}
        </h1>
      </section>
    )
}