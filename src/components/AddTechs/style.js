import styled from "styled-components";

export const StyledSection = styled.section`
width: calc(100% - 30px);

margin: 30px 15px;

display: flex;
justify-content: space-between;
align-items: center;

h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: var(--greySacale-5);
}

button {
    width: 32.49px;
    height: 32px;

    border: none;
    border-radius: 4px;

    background-color: var(--greySacale-2);

    font-size: 25px;
    color: white;
}

@media(min-width: 769px) {
    width: calc(100% - 230px);

    margin: 30px 100px 30px 115px;
}
`