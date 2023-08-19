import logo from "../../assets/Logo.svg";
import { LoginForm } from "../../components/forms/LoginForm";
import styles from "./style.module.scss";

export const LoginPage = () => {
  return (
    <main>
      <div className="container">
        <div className={styles.logoBox}>
          <img className={styles.img} src={logo} alt="Kenzie Hub" />
        </div>
        <LoginForm />
      </div>
    </main>
  );
};
