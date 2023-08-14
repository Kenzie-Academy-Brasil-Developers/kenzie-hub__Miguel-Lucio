import styles from "./style.module.scss";
import { VscSearchStop } from "react-icons/vsc";
export const ErrorPage = () => {
  return (
    <main>
      <div className={styles.errorBox}>
        <h1>Erro 404</h1>
        <VscSearchStop size={100} color="#f8f9fa" />
        <p>Não foi possivel encontrar esta página :/</p>
      </div>
    </main>
  );
};
