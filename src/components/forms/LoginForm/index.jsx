import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import styles from "./style.module.scss";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const { userLogin } = useContext(UserContext);

  const submit = (formData) => {
    userLogin(formData, setLoading, reset);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <h1 className="title one gray500">Login</h1>
      <Input
        label="Email"
        type="email"
        placeholder="Digite aqui seu email"
        {...register("email")}
        error={errors.email}
        disabled={loading}
      />
      <InputPassword
        label="Senha"
        placeholder="Digite aqui sua senha"
        {...register("password")}
        error={errors.password}
        disabled={loading}
      />
      <button type="submit" className="btn primary full">
        {loading ? "Entrando..." : "Entrar"}
      </button>
      <p className="text headlineBold gray400">Ainda não possui uma conta?</p>
      <Link to="/register">
        <button type="button" className="btn ligthGray full">
          Cadastre-se
        </button>
      </Link>
    </form>
  );
};
