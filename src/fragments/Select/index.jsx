import { forwardRef } from "react";
import { StyledFieldset } from "./style";

export const Select = forwardRef(({ label, id, ...rest }, ref) => {
  return (
    <StyledFieldset>
      {label ? <label>{label}</label> : null}
      <select id={id} ref={ref} {...rest} />
    </StyledFieldset>
  );
});
