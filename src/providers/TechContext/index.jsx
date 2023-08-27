import { useContext, createContext, useState } from "react";
import { UserContext } from "../UserContext";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [visibleCreateModal, setVisibleCreateModal] = useState(false);
  const [editingTech, setEditingTech] = useState(null);

  const { techList, setTechList } = useContext(UserContext);

  const createTech = async (formData, setLoading, reset) => {
    const token = localStorage.getItem("@tokenKenzieHub");
    try {
      setLoading(true);
      const newTech = formData;
      const { data } = await api.post("/users/techs", newTech, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { created_at, id, title, status, updated_at } = data;
      const newTechlist = [
        ...techList,
        { created_at, id, title, status, updated_at },
      ];
      setTechList(newTechlist);
      reset();
      toast.success("Tecnologia cadastrada com Sucesso!");
      setVisibleCreateModal(false);
    } catch (error) {
      if (
        error.response.data.message ===
        "User Already have this technology created you can only update it"
      ) {
        toast.error("Não é possível cadastrar uma Tecnologia já existente!");
      } else {
        toast.error("Erro ao cadastrar tecnologia. Tente novamente mais tarde");
      }
    } finally {
      setLoading(false);
    }
  };

  const editTech = async (formData, setLoading, id) => {
    const token = localStorage.getItem("@tokenKenzieHub");
    try {
      setLoading(true);
      const { data } = await api.put(`/users/techs/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTechList = techList.map((tech) =>
        tech.id === id ? (tech = data) : tech
      );
      setTechList(newTechList);
      toast.success("Tecnologia editada com Sucesso!");
      setEditingTech(null);
    } catch (error) {
      toast.error("Erro ao editar tecnologia. Tente novamente mais tarde");
    } finally {
      setLoading(false);
    }
  };

  const deleteTech = async (id) => {
    const token = localStorage.getItem("@tokenKenzieHub");
    try {
      const { data } = await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTechList = techList.filter((tech) => tech.id !== id);
      setTechList(newTechList);
      toast.success("Tecnologia deletada com Sucesso!");
    } catch (error) {
      if (error.response.data.message === "Not found tech with this id") {
        toast.error("Esta tecnologia já foi deletada");
      } else {
        toast.error("Erro ao deletar tecnologia. Tente novamente mais tarde");
      }
    }
  };

  return (
    <TechContext.Provider
      value={{
        visibleCreateModal,
        setVisibleCreateModal,
        techList,
        createTech,
        editTech,
        deleteTech,
        editingTech,
        setEditingTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
