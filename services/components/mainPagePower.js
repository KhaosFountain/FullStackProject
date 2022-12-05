import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import PowerWashingImage from "../styles/PowerWashingImage.jpg"

export default function Car() {
  return (
    <section className={styles.pw}>
      <h2>Power Washing</h2>
      <div>
        <Image src = {PowerWashingImage} className = {styles.pwImage}></Image>
      </div>
    </section>
  );
}
