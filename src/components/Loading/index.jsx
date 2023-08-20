import LoadingIcon from "../../assets/loading-icon.svg";
import styles from "./style.module.scss";

export const Loading = () => {
  return (
    <main>
      <div className={styles.loadingBox}>
        <img src={LoadingIcon} alt="Carregando..." />
      </div>
    </main>
  );
};
