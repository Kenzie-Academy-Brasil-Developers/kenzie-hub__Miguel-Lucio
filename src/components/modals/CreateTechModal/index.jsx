import { Input } from "../../forms/Input";
import { Select } from "../../forms/Select";
import styles from "./style.module.scss";

export const CreateTechModal = ({ setVisibleCreateModal }) => {
  return (
    <div role="dialog" className={styles.overlayBox}>
      <div className={styles.modalBox}>
        <div className={styles.headerBox}>
          <h3 className="title four gray500">Cadastrar Tecnologia</h3>
          <button onClick={() => setVisibleCreateModal(false)}>X</button>
        </div>
        <form>
          <Input
            label="Nome"
            type="text"
            placeholder="Tecnologia"
            // {...register("title")}
            // error={errors.title}
          />

          <Select
            label="Selecionar status"
            // {...register("status")}
            // error={errors.status}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <button type="submit" className="btn primary">
            Cadastrar Tecnologia
          </button>
        </form>
      </div>
    </div>
  );
};
