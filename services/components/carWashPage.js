import styles from "../styles/Home.module.css";
import Image from "next/image";
import carValetImage from "../styles/car-valet-cork.jpg";
import Link from "next/link";

export default function Car() {
  return (

    <section className = {styles.valetpage}>
      <h2>Car valet main Page Title</h2>

      <div className = {styles.valetbox}>
      <Image src = {carValetImage} className = {styles.valetPageImage}/>
      
      </div>
    </section>
  );
}
