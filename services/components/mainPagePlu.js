import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Car() {
  return (
    <section className={styles.section}>
      <h2>Plumber</h2>
      <p>
        This is the Plumber section here we will contain link to other page
        about this topic
      </p>
    </section>
  );
}
