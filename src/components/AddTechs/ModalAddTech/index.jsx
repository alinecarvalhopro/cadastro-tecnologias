import { StyledDiv } from "./style";
import { useForm } from "react-hook-form";
import { formExampleSchema } from "./formExampleSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTechsUserContext } from "../../../providers/TechContext";
import * as F from "../../../fragments";

export const ModalAddTech = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formExampleSchema),
  });

  const { options, addNewTech, modalAddIsOpen, setModalAddIsOpen, loading } =
    useTechsUserContext();

  return (
    <>
      {modalAddIsOpen ? (
        <StyledDiv role="dialog">
          <div className={"modalContainer"}>
            <div className={"boxTitleClose"}>
              <h3>Cadastrar Tecnologia</h3>{" "}
              <button
                className={"close"}
                onClick={() => setModalAddIsOpen(false)}
              >
                X
              </button>
            </div>
            <form onSubmit={handleSubmit(addNewTech)}>
              <F.Input
                label="Nome"
                type="text"
                placeholder="Digite o nome da tecnologia"
                {...register("title")}
              />
              {errors.title ? <p>{errors.title.message}</p> : null}
              <F.Select label="Selecionar status" {...register("status")}>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </F.Select>
              <button className={"submit"} type="submit" disabled={loading}>
                {loading ? "Cadastrando..." : "Cadastrar Tecnologia"}
              </button>
            </form>
          </div>
        </StyledDiv>
      ) : null}
    </>
  );
};
