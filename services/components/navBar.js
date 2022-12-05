import styles from "../styles/Home.module.css";
import Image from "next/image";




export default function navBar() {
  return (
    <section className={styles.navBar}>
        <button className={styles.navBarBtn}>About us</button>
      <div className = {styles.navBarText}>
          <p>this is the nav bar</p>
      </div>
    </section>
  );
}
