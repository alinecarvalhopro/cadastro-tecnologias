import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import toast from "react-hot-toast";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techsUser, setTechsUser] = useState([]);
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [modalRemoveEditIsOpen, setModalRemoveEditIsOpen] = useState(false);
  const [tech, setTech] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingRemove, setLoadingRemove] = useState(false);

  const userTokenLocalStorage = localStorage.getItem("@TOKEN");

  const options = [
    {
      value: "Iniciante",
    },
    { value: "Intermediário" },
    {
      value: "Avançado",
    },
  ];

  const addNewTech = async (data) => {
    try {
      setLoading(true);
      const newTech = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${userTokenLocalStorage}`,
        },
      });
      setTechsUser([...techsUser, newTech.data]);
      toast.success("Tecnologia cadastrada com sucesso!", {
        style: {
          padding: "16px",
          color: "#FFFFFF",
          background: "#343B41",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "14px",
        },
        iconTheme: {
          primary: "#3FE864",
          secondary: "#343B41",
        },
      });
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado.", {
        style: {
          padding: "16px",
          color: "#FFFFFF",
          background: "#343B41",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "14px",
        },
        iconTheme: {
          primary: "#E83F5B",
          secondary: "#343B41",
        },
      });
    } finally {
      setLoading(false);
      setModalAddIsOpen(false);
    }
  };

  const removeTech = async (techId) => {
    try {
      setLoadingRemove(true);
      await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${userTokenLocalStorage}`,
        },
      });
      const user = await api.get(`/profile`, {
        headers: {
          Authorization: `Bearer ${userTokenLocalStorage}`,
        },
      });
      setTechsUser(user.data.techs);
      toast.success("Tecnologia excluída com sucesso!", {
        style: {
          padding: "16px",
          color: "#FFFFFF",
          background: "#343B41",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "14px",
        },
        iconTheme: {
          primary: "#3FE864",
          secondary: "#343B41",
        },
      });
    } catch {
      console.log(error);
      toast.error("Ops! Algo deu errado.", {
        style: {
          padding: "16px",
          color: "#FFFFFF",
          background: "#343B41",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "14px",
        },
        iconTheme: {
          primary: "#E83F5B",
          secondary: "#343B41",
        },
      });
    } finally {
      setModalRemoveEditIsOpen(false);
      setLoadingRemove(false);
    }
  };

  const editTech = async (data) => {
    if (
      tech.status === "Avançado" ||
      (tech.status === "Intermediário" && data.status != "Avançado")
    ) {
      toast.error("Só é possível atualizar progressivamente.", {
        style: {
          padding: "16px",
          color: "#FFFFFF",
          background: "#343B41",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "14px",
        },
        iconTheme: {
          primary: "#E83F5B",
          secondary: "#343B41",
        },
      });
    } else {
      try {
        setLoading(true);
        await api.put(`/users/techs/${tech.id}`, data, {
          headers: {
            Authorization: `Bearer ${userTokenLocalStorage}`,
          },
        });
        const user = await api.get(`/profile`, {
          headers: {
            Authorization: `Bearer ${userTokenLocalStorage}`,
          },
        });
        setTechsUser(user.data.techs);
        toast.success("Tecnologia editada com sucesso!", {
          style: {
            padding: "16px",
            color: "#FFFFFF",
            background: "#343B41",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "14px",
          },
          iconTheme: {
            primary: "#3FE864",
            secondary: "#343B41",
          },
        });
      } catch {
        console.log(error);
        toast.error("Ops! Algo deu errado.", {
          style: {
            padding: "16px",
            color: "#FFFFFF",
            background: "#343B41",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "14px",
          },
          iconTheme: {
            primary: "#E83F5B",
            secondary: "#343B41",
          },
        });
      } finally {
        setModalRemoveEditIsOpen(false);
        setLoading(false);
      }
    }
  };

  return (
    <TechContext.Provider
      value={{
        techsUser,
        setTechsUser,
        options,
        addNewTech,
        modalAddIsOpen,
        setModalAddIsOpen,
        modalRemoveEditIsOpen,
        setModalRemoveEditIsOpen,
        removeTech,
        setTech,
        tech,
        editTech,
        loading,
        loadingRemove
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export const useTechsUserContext = () => useContext(TechContext);