import { useContext, useState } from "react";
import { Input } from "../../forms/Input";
import { Select } from "../../forms/Select";
import styles from "./style.module.scss";
import { TechContext } from "../../../providers/TechContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTechFormSchema } from "./createTechFormSchema";

export const CreateTechModal = () => {
  const [loading, setLoading] = useState(false);
  const { setVisibleCreateModal, createTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(createTechFormSchema),
  });

  const submit = (formData) => {
    createTech(formData, setLoading, reset);
  };

  return (
    <div role="dialog" className={styles.overlayBox}>
      <div className={styles.modalBox}>
        <div className={styles.headerBox}>
          <h3 className="title four gray500">Cadastrar Tecnologia</h3>
          <button onClick={() => setVisibleCreateModal(false)}>X</button>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            label="Nome"
            type="text"
            placeholder="Tecnologia"
            {...register("title")}
            error={errors.title}
            disabled={loading}
          />

          <Select
            label="Selecionar status"
            {...register("status")}
            error={errors.status}
            disabled={loading}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <button type="submit" className="btn primary">
            {loading ? "Cadastrando..." : "Cadastrar Tecnologia"}
          </button>
        </form>
      </div>
    </div>
  );
};
