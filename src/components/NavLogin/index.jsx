import { StyledNav } from "./style";
import Logo from "../../assets/logo.svg";

export const NavLogin = () => {
  return (
    <StyledNav>
        <img className={"logo"} src={Logo} alt={"Logo"} />
    </StyledNav>
  );
}