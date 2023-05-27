import { StyledNav } from "./style";
import Logo from "../../assets/logo.svg";

export const NavHome = ({children}) => {
  return (
    <StyledNav>
        <img className={"logo"} src={Logo} alt={"Logo"} />
        <div>{children}</div>
    </StyledNav>
  );
}