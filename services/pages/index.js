import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from 'next/link'
import Welcome from '../components/welcomePage'
import Car from '../components/mainPageCar'
import PowerWashing from '../components/mainPagePower'
import Electrician from '../components/mainPageEle'
import Plumber from '../components/mainPagePlu'

export default function Home() {
  return (
    <div className={styles.container}>
      <Welcome/>

      {/* calling car component from components file */}
      <Car/>

      <PowerWashing/>

      <Electrician/>

      <Plumber/>
    </div>
  );
}
