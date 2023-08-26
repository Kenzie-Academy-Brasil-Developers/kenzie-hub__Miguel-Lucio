import styles from "./style.module.scss";
import pencil from "../../../assets/pencil.svg";
import trash from "../../../assets/trash.svg";

export const TechCard = ({ setVisibleEditModal }) => {
  return (
    <li className={styles.card}>
      <h4 className="title three gray500">React JS</h4>
      <div className={styles.titleBox}>
        <p className="text headlineBoldFixed gray400">Avançado</p>
        <div>
          <button onClick={() => setVisibleEditModal(true)}>
            <img src={pencil} alt="atualizar" />
          </button>
          <button>
            <img src={trash} alt="excluir" />
          </button>
        </div>
      </div>
    </li>
  );
};
