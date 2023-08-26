import { AiOutlinePlus } from "react-icons/ai";
import styles from "./style.module.scss";
import { TechCard } from "./TechCard";

export const TechList = ({ setVisibleCreateModal, setVisibleEditModal }) => {
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
        <TechCard setVisibleEditModal={setVisibleEditModal} />
        <TechCard setVisibleEditModal={setVisibleEditModal} />
      </ul>
    </div>
  );
};
