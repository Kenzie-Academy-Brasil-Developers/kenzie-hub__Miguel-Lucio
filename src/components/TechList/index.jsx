import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "./style.module.scss";
import { TechCard } from "./TechCard";
import { TechContext } from "../../providers/TechContext";

export const TechList = ({}) => {
  const { setVisibleCreateModal, techList } = useContext(TechContext);

  return (
    <div className={styles.techBox}>
      <div className={styles.titleBox}>
        <h3 className="title two gray500">Tecnologias </h3>
        <button
          className="btn plus grayBold"
          onClick={() => setVisibleCreateModal(true)}
        >
          <AiOutlinePlus size={16} color="#ffffff" />
        </button>
      </div>
      <ul>
        {techList.length === 0 ? (
          <li>
            <p className="text two gray500">
              Você não possui tecnologias cadastradas
            </p>
          </li>
        ) : (
          techList.map((tech) => <TechCard key={tech.id} tech={tech} />)
        )}
      </ul>
    </div>
  );
};
