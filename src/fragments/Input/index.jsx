import { forwardRef } from "react";
import { StyledFieldset } from "./style";

export const Input = forwardRef(({ label, type, id, ...rest }, ref) => {
  return (
    <StyledFieldset>
      {label ? <label>{label}</label> : null}
      <input type={type} id={id} ref={ref} {...rest} />
    </StyledFieldset>
  );
});
