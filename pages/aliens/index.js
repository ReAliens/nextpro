import Link from "next/link";
import styles from "../../styles/aliens.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { aliens: data },
  };
};

const Aliens = ({ aliens }) => {
  return (
    <div>
      <h1>Aliens List</h1>
      {aliens?.map((alien) => (
        <Link href={`/aliens/${alien?.id}`} className={alien?.id}>
          <a className={styles.single}>
            <h3>{alien?.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Aliens;
