import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const submit = (formData) => {
    console.log(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <h1 className="title one gray500">Login</h1>
      <Input
        label="Email"
        type="email"
        placeholder="Digite aqui seu email"
        {...register("email")}
      />
      <InputPassword
        label="Senha"
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      <Link to="/dashboard">
        <button type="submit" className="btn primary full">
          Entrar
        </button>
      </Link>
      <p className="text headlineBold gray400">Ainda não possui uma conta?</p>
      <Link to="/register">
        <button type="button" className="btn ligthGray full">
          Cadastre-se
        </button>
      </Link>
    </form>
  );
};
