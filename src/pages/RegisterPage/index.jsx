import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/forms/RegisterForm";
import logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";

export const RegisterPage = () => {
  return (
    <main>
      <div className="container">
        <div className={styles.logoBox}>
          <img src={logo} alt="Kenzie Hub" />
          <Link to="/">
            <button className="btn small grayBold">Voltar</button>{" "}
          </Link>
        </div>
        <RegisterForm />
      </div>
    </main>
  );
};
