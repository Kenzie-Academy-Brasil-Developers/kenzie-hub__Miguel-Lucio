import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import logo from "../../assets/Logo.svg";

export const DashboardPage = () => {
  return (
    <>
      <header className={styles.headerBox}>
        <div className="container">
          <div className={styles.logoBox}>
            <img src={logo} alt="Kenzie Hub" />
            <Link to="/">
              <button className="btn small grayBold">Sair</button>
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.userBox}>
          <div className="container">
            <div className={styles.dataUser}>
              <h2 className="title onefixed gray500">Olá Miguel Lúcio</h2>
              <p className="text headlineBoldFixed gray400">
                Primeiro módulo (Introdução ao frontend)
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className={styles.developingBox}>
              <h3 className="title onefixed gray500">
                Que pena! Estamos em desenvolvimento :(
              </h3>
              <p className="text paragraph gray500">
                Nossa aplicação está em desenvolvimento, em breve teremos
                novidades
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
