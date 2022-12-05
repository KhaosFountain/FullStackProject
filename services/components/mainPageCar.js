import styles from "../styles/Home.module.css";
import Image from "next/image";
import carValetImage from "../styles/car-valet-cork.jpg";
import Link from "next/link";

export default function Car() {
  return (
    <section className={styles.valet}>
      <h2 className={styles.h2title}>Car Valet</h2>
      <div className={styles.valetbox}>
        <Image src={carValetImage} className={styles.valetimage} />
        <p className={styles.valettext}>
          Our Car Valeting Specialists is a company with years of expertise in
          mobile valeting, <br />
          car cleaning, and luxury car valeting services. <br />
          <br />
          We quickly grew to be Ireland's largest car valeting company,and we
          are proud to
          <br />
          offer contract services like car valeting, car cleaning in showrooms,
          all the way
          <br />
          down to a straightforward car wash, either on site or with our mobile
          valet. <br />
          In other words, we cater to the needs of our customers, who include
          market leaders like <br />
          VW, Skoda, Volvo, Citreon, Landrover, Jaguar, BMW, Mercedes Benz,
          Audi, Kia, and Hyundai, <br />
          to name a few.
        </p>
      </div>
      <button className={styles.valetbtn}>
        <Link href="/car-wash"> Booking Details</Link>
      </button>

      <div className={styles.beforeAfter}></div>
    </section>
  );
}
