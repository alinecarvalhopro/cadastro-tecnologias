import { StyledNav } from "./style";
import Logo from "../../assets/logo.svg";

export const NavRegister = ({ children }) => {
  return (
    <StyledNav>
      <div className={"box"}>
        <img className={"logo"} src={Logo} alt={"Logo"} />
        <div>{children}</div>
      </div>
    </StyledNav>
  );
};
