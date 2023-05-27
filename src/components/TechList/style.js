import styled from "styled-components";

export const StyledUl = styled.ul`
width: calc(100% - 30px);

margin: 0 auto;

padding: 15px 0;

border-radius: 4px;

background-color: var(--greySacale-2);

display: flex;
flex-direction: column;
align-items: center;

@media(min-width: 769px) {
    width: calc(100% - 230px);

    margin: 0 115px 0 115px;
}
`