import styles from "./ejemplo.module.css";

export default function Intinerario() {
  return (
    <div>
      <div className={styles.principal}>
        <h1>Intinerario!</h1>
      </div>
      <div className={styles.card}>
        <h2>Mientras van llegando los invitados</h2>
        <p>
          van a ver una mesa que tenga los snacks al rededor de 21:30,
          aproximadamente se mantendra la mesa una hora
        </p>
      </div>
      <div className={styles.card}>
        <h2>Se sirve la mesa</h2>
        <p>
          23:15 Donde aca se mantendra una hora la mesa para comer tranquilos,
          00:15 la mesa queda libre
        </p>
      </div>
      <div className={styles.card}>
        <h2>Postre</h2>
        <p>El postre se servira aproximadamente a la 1:00hs</p>
      </div>
      <div className={styles.card}>
        <h2>Mesa dulce</h2>
        <p>Esta mesa se servira a las 3:00hs</p>
      </div>
    </div>
  );
}
