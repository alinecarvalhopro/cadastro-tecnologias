import { Link, useNavigate } from "react-router-dom";
import { StyledForm } from "./style";
import { NavLogin } from "../../components/NavLogin";
import { Toaster } from "react-hot-toast";
import { useUserContext } from "../../providers/UserContext";
import { useEffect } from "react";
import * as F from "../../fragments";
import { useForm } from "react-hook-form";
import { formExampleSchema } from "./formExampleSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const Login = () => {
  const navigate = useNavigate();

  const { signIn, loading } = useUserContext();

  const userTokenLocalStorage = localStorage.getItem("@TOKEN");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formExampleSchema),
  });

  useEffect(() => {
    const autoLogin = () => {
      if (userTokenLocalStorage) {
        navigate("/home");
      }
    };
    autoLogin();
  }, []);

  return (
    <>
      <Toaster className={"toast"} position="top-right" reverseOrder={false} />
      <NavLogin />
      <StyledForm onSubmit={handleSubmit(signIn)}>
        <h1>Login</h1>
        <F.Input
          label="Email."
          type="text"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        {errors.email ? <p>{errors.email.message}</p> : null}
        <F.Input
          label="Senha"
          type="password"
          placeholder="Digite aqui a sua senha"
          {...register("password")}
        />
        {errors.password ? <p>{errors.password.message}</p> : null}
        <button type="submit" disabled={loading}>
          {loading ? "Carregando..." : "Entrar"}
        </button>
        <p className={"message"}>Ainda não possui uma conta?</p>
        <Link to="/register" className={"toGoRegister"}>
          Cadastre-se
        </Link>
      </StyledForm>
    </>
  );
};
