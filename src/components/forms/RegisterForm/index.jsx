import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { Select } from "../Select";
import styles from "./style.module.scss";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  const submit = (formData) => {
    console.log(formData);
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
      />
      <Input
        label="Email"
        type="email"
        placeholder="Digite aqui seu email"
        {...register("email")}
      />
      <Input
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      <Input
        label="Confirmar senha"
        type="password"
        placeholder="Digite novamente sua senha"
        {...register("confirm_password")}
      />
      <Input
        label="Bio"
        type="text"
        placeholder="Fale sobre você"
        {...register("bio")}
      />
      <Input
        label="Contato"
        type="text"
        placeholder="Opcão de contato"
        {...register("contact")}
      />
      <Select label="Selecionar módulo" {...register("course_module")}>
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
        Cadastrar
      </button>
    </form>
  );
};
