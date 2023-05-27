import { useTechsUserContext } from "../../providers/TechContext";
import { StyledSection } from "./style";

export const AddTech = () => {
  const { setModalAddIsOpen } = useTechsUserContext();
  return (
    <StyledSection>
      <h2>Tecnologias</h2>
      <button onClick={() => setModalAddIsOpen(true)}>+</button>
    </StyledSection>
  );
};
