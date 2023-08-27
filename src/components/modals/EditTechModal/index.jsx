import { useContext, useState } from "react";
import { Select } from "../../forms/Select";
import styles from "./style.module.scss";
import { TechContext } from "../../../providers/TechContext";
import { useForm } from "react-hook-form";

export const EditTechModal = () => {
  const [loading, setLoading] = useState(false);
  const { editingTech, setEditingTech, editTech } = useContext(TechContext);
  const { register, handleSubmit } = useForm();

  const submit = (formData) => {
    editTech(formData, setLoading, editingTech.id);
  };

  return (
    <div role="dialog" className={styles.overlayBox}>
      <div className={styles.modalBox}>
        <div className={styles.headerBox}>
          <h3 className="title four gray500">Tecnologia Detalhes</h3>
          <button onClick={() => setEditingTech(null)}>X</button>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <span className="text headline gray500">Nome</span>
            <span className={styles.tech}>{editingTech.title}</span>
          </div>

          <Select
            label="Selecionar status"
            {...register("status")}
            defaultValue={editingTech.status}
            disabled={loading}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <button type="submit" className="btn negative">
            {loading ? "Salvando..." : "Salvar alterações"}
          </button>
        </form>
      </div>
    </div>
  );
};
