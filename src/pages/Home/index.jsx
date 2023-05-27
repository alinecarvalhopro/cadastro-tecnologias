import { Link } from "react-router-dom";
import { NavHome } from "../../components/NavHome/index.jsx";
import { HeaderHome } from "../../components/HeaderHome/index.jsx";
import { useUserContext } from "../../providers/UserContext.jsx";
import { useEffect } from "react";
import { TechList } from "../../components/TechList/index.jsx";
import { AddTech } from "../../components/AddTechs/index.jsx";
import { useTechsUserContext } from "../../providers/TechContext.jsx";
import { ModalAddTech } from "../../components/AddTechs/ModalAddTech/index.jsx";
import { Toaster } from "react-hot-toast";
import { ModalRemoveEditTech } from "../../components/ModalRemoveEditTech/index.jsx";

export const Home = () => {
  const { logout, getUser, loading } = useUserContext();
  const { techsUser } = useTechsUserContext();

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <NavHome>
        <Link to="/login" onClick={logout}>
          Sair
        </Link>
      </NavHome>
      <HeaderHome />
      <ModalAddTech />
      <ModalRemoveEditTech />
      <AddTech />
      {loading ? (
        <h3 className={"tempMessage"}>Carregando...</h3>
      ) : (
        <>
          {techsUser.length > 0 ? (
            <TechList />
          ) : (
            <h3 className={"tempMessage"}>
              <span>Hello Dev,</span> cadastre uma tecnologia!
            </h3>
          )}
        </>
      )}
    </>
  );
};