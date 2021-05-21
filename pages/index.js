import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>welcome to test next js</p>
      <Link href="/aliens">
        <a className={styles.btn}>See Aliens List</a>
      </Link>
    </div>
  );
}
