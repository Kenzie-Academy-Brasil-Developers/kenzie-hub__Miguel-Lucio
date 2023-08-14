import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { Select } from "../Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const userRegister = async (formData) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
      navigate("/");
      toast.success("Cadastro realizado com sucesso!");
    } catch (error) {
      console.log(error);
      if (error.response?.data.message === "Email already exists") {
        toast.error("Usuário já cadastrado");
      }
    } finally {
      setLoading(false);
    }
  };

  const submit = (formData) => {
    userRegister(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <h1 className="title one gray500">Crie sua conta</h1>
      <p className="text headline gray400">Rápido e grátis, vamos nessa</p>
      <Input
        label="Nome"
        type="text"
        placeholder="Digite aqui seu nome"
        {...register("name")}
        error={errors.name}
        disabled={loading}
      />
      <Input
        label="Email"
        type="email"
        placeholder="Digite aqui seu email"
        {...register("email")}
        error={errors.email}
        disabled={loading}
      />
      <Input
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
        error={errors.password}
        disabled={loading}
      />
      <Input
        label="Confirmar senha"
        type="password"
        placeholder="Digite novamente sua senha"
        {...register("confirm_password")}
        error={errors.confirm_password}
        disabled={loading}
      />
      <Input
        label="Bio"
        type="text"
        placeholder="Fale sobre você"
        {...register("bio")}
        error={errors.bio}
        disabled={loading}
      />
      <Input
        label="Contato"
        type="text"
        placeholder="Opcão de contato"
        {...register("contact")}
        error={errors.contact}
        disabled={loading}
      />
      <Select
        label="Selecionar módulo"
        {...register("course_module")}
        error={errors.course_module}
        disabled={loading}
      >
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
      </Select>
      <button className="btn negative" type="submit">
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>
    </form>
  );
};
