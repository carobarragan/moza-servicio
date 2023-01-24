import Image from "next/image";
import Fotter from "./Fotter/Fotter";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.title}>Servicio de Moza</h1>
      <div className={styles.contenedor}>
        <Image
          src="/logo4.jpg"
          className={styles.imagen}
          width={100}
          height={124}
          priority
        />
      </div>
      <div className={styles.fotter}>
        <Fotter className={styles.fotter} />
      </div>
    </div>
  );
}
