import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import toast from "react-hot-toast";
import { useState } from "react";
import { useContext } from "react";
import { useTechsUserContext } from "./TechContext";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const { setTechsUser } = useTechsUserContext();

  const navigate = useNavigate();

  const [loggedInUser, setLoggedInUser] = useState({});
  const [loading, setLoading] = useState(false);

  const userTokenLocalStorage = localStorage.getItem("@TOKEN");

  const options = [
    {
      value: "Primeiro módulo (Introdução ao Frontend)",
    },
    { value: "Segundo módulo (Frontend Avançado)" },
    {
      value: "Terceiro módulo (Introdução ao Backend)",
    },
    { value: "Quarto módulo (Backend Avançado)" },
  ];

  const submit = async (data) => {
    delete data.confirm;
    try {
      await api.post("/users", data);
      toast.success("Conta criada com sucesso!", {
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

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
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
    }
  };

  const signIn = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", data);
      localStorage.setItem("@USERID", response.data.user.id);
      localStorage.setItem("@TOKEN", response.data.token);
      setLoggedInUser(response.data);
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } catch (error) {
      toast.error("Email e/ou senha incorretos.", {
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
    }
  };

  const logout = () => {
    localStorage.removeItem("@USERID");
    localStorage.removeItem("@TOKEN");
    setLoggedInUser({});
  };

  const getUser = async () => {
    if (!userTokenLocalStorage) {
      setLoggedInUser(undefined);
      navigate("/login");
    }
    try {
      setLoading(true);
      const user = await api.get(`/profile`, {
        headers: {
          Authorization: `Bearer ${userTokenLocalStorage}`,
        },
      });
      setLoggedInUser(user.data);
      setTechsUser(user.data.techs);
    } catch (error) {
      console.log(error);
      localStorage.removeItem("@TOKEN");
      localStorage.removeItem("@USERID");
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        signIn,
        options,
        submit,
        loggedInUser,
        setLoggedInUser,
        logout,
        loading,
        setLoading,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);