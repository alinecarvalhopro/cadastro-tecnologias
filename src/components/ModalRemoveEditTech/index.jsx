import { StyledDiv } from "./style";
import { useForm } from "react-hook-form";
import { formExampleSchema } from "./formExampleSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTechsUserContext } from "../../providers/TechContext";
import * as F from "../../fragments";

export const ModalRemoveEditTech = () => {
  const {
    options,
    modalRemoveEditIsOpen,
    setModalRemoveEditIsOpen,
    removeTech,
    tech,
    editTech,
    loadingRemove,
  } = useTechsUserContext();

  const { register, handleSubmit, formState: { isSubmitting }, } = useForm({
    resolver: zodResolver(formExampleSchema),
  });

  return (
    <>
      {modalRemoveEditIsOpen ? (
        <StyledDiv role="dialog">
          <div className={"modalContainer"}>
            <div className={"boxTitleClose"}>
              <h3>Tecnologia Detalhes</h3>{" "}
              <button
                className={"close"}
                onClick={() => setModalRemoveEditIsOpen(false)}
              >
                X
              </button>
            </div>
            <form onSubmit={handleSubmit(editTech)}>
              <F.Input
                label="Nome do projeto"
                type="text"
                defaultValue={tech.title}
                disabled
              />
              <F.Select label="Status" {...register("status")}>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </F.Select>
              <div className={"boxButtonsEditRemove"}>
                <button
                  className={"submitEdit"}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Editando..." : "Editar Tecnologia"}
                </button>
                <button
                  className={"submitRemove"}
                  onClick={(e) => {
                    e.preventDefault();
                    removeTech(tech.id);
                  }}
                  disabled={loadingRemove}
                >
                  {loadingRemove ? "Excluindo..." : "Excluir"}
                </button>
              </div>
            </form>
          </div>
        </StyledDiv>
      ) : null}
    </>
  );
};
