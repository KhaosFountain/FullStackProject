import styles from "../styles/Home.module.css";
import Image from "next/image";
import carValetImage from "../styles/car-valet-cork.jpg";
import Link from "next/link";

export default function Car() {
  return (
    <section className={styles.cw}>
      <h2 className={styles.h2title}>Car Valet</h2>
      <div className={styles.valet}>
        <Image src={carValetImage} className={styles.valetimage} />
        <p className={styles.valettext}>
          Basic details about the car valet<br /> <br />
          Name: car Valet name <br />
          Location: car vaelt Location <br />
          opening times: <br />
        </p>
      </div>
      <button className={styles.valetbtn}>
        <Link href="/car-wash"> Car Wash</Link>
      </button>
    </section>
  );
}
