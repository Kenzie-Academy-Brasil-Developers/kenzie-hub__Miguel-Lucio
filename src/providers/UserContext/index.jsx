import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@tokenKenzieHub");

    const getUser = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      getUser();
    }
  }, []);

  const userRegister = async (formData, setLoading, reset) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
      toast.success("Cadastro realizado com sucesso!");
      reset();
      navigate("/");
    } catch (error) {
      if (error.response?.data.message === "Email already exists") {
        toast.error("Usuário já cadastrado");
      }
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (formData, setLoading, reset) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);
      setUser(data.user);
      localStorage.setItem("@tokenKenzieHub", data.token);
      toast.success("Usuário logado");
      reset();
      navigate("/dashboard");
    } catch (error) {
      if (
        error.response?.data.message ===
        "Incorrect email / password combination"
      ) {
        toast.error("Email e/ou senha incorretos");
      }
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    setUser(null);
    toast.error("Usuário deslogado");
    navigate("/");
    localStorage.removeItem("@tokenKenzieHub");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        userRegister,
        userLogin,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
