import { useTechsUserContext } from "../../../providers/TechContext";
import { StyledLi } from "./style";

export const TechCard = () => {
  const { techsUser } = useTechsUserContext();
  const { setModalRemoveEditIsOpen, setTech } = useTechsUserContext();
  return (
    <>
      {techsUser.map((tech) => {
        return (
          <StyledLi
            key={tech.id}
            onClick={() => {
              setModalRemoveEditIsOpen(true), setTech(tech);
            }}
          >
            <h3>{tech.title}</h3>
            <p>{tech.status}</p>
          </StyledLi>
          );
        })}
    </>
  );
};
