import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";
import { TechList } from "../../components/TechList";
import { CreateTechModal } from "../../components/modals/CreateTechModal";
import { EditTechModal } from "../../components/modals/EditTechModal";
import { TechContext } from "../../providers/TechContext";

export const DashboardPage = () => {
  const { user, userLogout } = useContext(UserContext);
  const { visibleCreateModal, editingTech } = useContext(TechContext);

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
            <TechList />
          </div>
        </section>
      </main>
      {visibleCreateModal ? <CreateTechModal /> : null}
      {editingTech ? <EditTechModal /> : null}
    </>
  );
};
