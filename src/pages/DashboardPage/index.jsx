import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";

export const DashboardPage = () => {
  const { user, userLogout } = useContext(UserContext);

  return (
    <>
      <header className={styles.headerBox}>
        <div className="container">
          <div className={styles.logoBox}>
            <img src={logo} alt="Kenzie Hub" />
            <button onClick={() => userLogout()} className="btn small grayBold">
              Sair
            </button>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.userBox}>
          <div className="container">
            <div className={styles.dataUser}>
              <h2 className="title onefixed gray500">Olá, {user.name}</h2>
              <p className="text headlineBoldFixed gray400">
                {user.course_module}
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
