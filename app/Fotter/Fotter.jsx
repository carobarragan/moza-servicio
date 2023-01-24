import Image from "next/image";
import styles from "./Fotter.module.css";
export default function Fotter() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <a
          href="https://www.facebook.com/gladys.menozzi?mibextid=ZbWKwL"
          target="_blank"
        >
          <Image src="/face.png" width={50} height={44} priority />
          <br />
        </a>
        <Image src="/telefono.png" width={50} height={44} priority />
        2226-526000{" "}
      </div>
    </div>
  );
}
