import styles from "../styles/Home.module.css";
import Image from "next/image";
import carValetImage from "../styles/car-valet-cork.jpg";
import Link from "next/link";

import NavBar from "../components/navBar";
import navBar from "../components/navBar";

export default function Car() {
  return (
    <section>
      <section className={styles.homeBar}>
        <button className={styles.homeBarBtn} >
          <Link href="javascript:history.back()"> Home</Link>
          </button>
        <div className={styles.homeBarText}>
          <p>this is the nav bar</p>
        </div>

        <button className={styles.homeBarBtn}></button>
        <button className={styles.homeBarBtn}></button>
      </section>

      <section className={styles.pricePage}>
        <h2>Car valet main Page Title</h2>

        <div className={styles.priceBox}>
          <div className={styles.priceOpt}>
            <Image src={carValetImage} className={styles.pricePageImage} />
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>

          <div className={styles.priceOpt}>
            <Image src={carValetImage} className={styles.pricePageImage} />
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>

          <div className={styles.priceOpt}>
            <Image src={carValetImage} className={styles.pricePageImage} />
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>

          <div className={styles.priceOpt}>
            <Image src={carValetImage} className={styles.pricePageImage} />
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </section>
    </section>
  );
}
