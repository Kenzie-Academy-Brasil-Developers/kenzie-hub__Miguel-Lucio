import styles from "./style.module.scss";
import pencil from "../../../assets/pencil.svg";
import trash from "../../../assets/trash.svg";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const TechCard = ({ tech }) => {
  const { deleteTech, setEditingTech } = useContext(TechContext);

  return (
    <li className={styles.card}>
      <h4 className="title three gray500">{tech.title}</h4>
      <div className={styles.titleBox}>
        <p className="text headlineBoldFixed gray400">{tech.status}</p>
        <div>
          <button onClick={() => setEditingTech(tech)}>
            <img src={pencil} alt="atualizar" />
          </button>
          <button onClick={() => deleteTech(tech.id)}>
            <img src={trash} alt="excluir" />
          </button>
        </div>
      </div>
    </li>
  );
};
