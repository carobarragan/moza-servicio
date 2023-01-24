import styles from "./post.module.css";
import Image from "next/image";
export default async function Post() {
  return (
    <div className={styles.principal}>
      <div>
        <h1>Servicio GM</h1>
      </div>
      <div className={styles.card}>
        <h2>
          Garantía de calidad: <br />
          Cumplir las buenas pràcticas de nuestro personal, a fin de lograr
          establecer un orden y limpieza en las tareas
          <Image src="/servicio.webp" width={122} height={122} />
        </h2>
      </div>
      <div className={styles.card}>
        <h2>
          Puntualidad: <br /> Otro pilar de nuestro servicio es el servicio y la
          puntualidad. la comida se sirve de acuerdo a su horario
          correspondiente, en el horario acordado con cada cliente, sabiendo que
          es de suma importancia la puntualidad en que reciben la comida
          <Image src="/reloj.webp" width={122} height={122} />
        </h2>
      </div>
      <div className={styles.card}>
        <h2 className={styles.text}>
          Precios Competitivos: <br />
          Nuestros precios han sido fijado luego de una exhaustiv investigacion
          de mercado, logrando el equilibrio entre la calidad y el costo. En GM
          investigamos permanentemente el mercado para poder brindar el mejor
          precio Competitivo
          <Image src="/chancho.webp" width={122} height={122} />
        </h2>
      </div>
    </div>
  );
}
