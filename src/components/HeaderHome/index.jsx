import { useUserContext } from "../../providers/UserContext";
import { StyledHeader } from "./style";

export const HeaderHome = () => {
  const { loggedInUser } = useUserContext();
  return (
    <StyledHeader>
      <h1>Olá, {loggedInUser.name}</h1>
      <p>{loggedInUser.course_module}</p>
    </StyledHeader>
  );
}
