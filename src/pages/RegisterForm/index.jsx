import { useForm } from "react-hook-form";
import { formExampleSchema } from "./formExampleSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { StyledForm } from "./style";
import { NavRegister } from "../../components/NavRegister";
import React from "react";
import { Toaster } from "react-hot-toast";
import { useUserContext } from "../../providers/UserContext";
import * as F from "../../fragments";

export const RegisterForm = () => {
  const { options, submit } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formExampleSchema),
  });

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <NavRegister>
        <Link to="/login">Voltar</Link>
      </NavRegister>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <h1>Crie sua conta</h1>
        <p className="instruction">Rapido e grátis, vamos nessa</p>
        <F.Input
          label="Nome"
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        {errors.name ? <p>{errors.name.message}</p> : null}
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
          autoComplete=""
        />
        {errors.password ? <p>{errors.password.message}</p> : null}
        <F.Input
          label="Confirmar Senha"
          type="password"
          placeholder="Confirme a sua senha"
          {...register("confirm")}
        />
        {errors.confirm ? <p>{errors.confirm.message}</p> : null}
        <F.Input
          label="Bio"
          type="text"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        {errors.bio ? <p>{errors.bio.message}</p> : null}
        <F.Input
          label="Contato"
          type="text"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        {errors.contact ? <p>{errors.contact.message}</p> : null}
        <F.Select label="Selecionar módulo" {...register("course_module")}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </F.Select>
        <button type="submit">Cadastrar</button>
      </StyledForm>
    </>
  );
};
