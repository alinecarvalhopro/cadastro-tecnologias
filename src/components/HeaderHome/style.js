import styled from "styled-components";

export const StyledHeader = styled.header`

    width: calc(100% - 15px);
    height: 131px;

    margin-top: 72px;

    border-bottom: 1px solid var(--greySacale-3);

    padding-left: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--greySacale-5);
}

p {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--greySacale-4); 
}

@media(min-width: 769px) {
    width: 100%;

    padding: 0;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
        margin-left: 115px  
    }

    p {
        margin-right: 115px;
        margin-bottom: 0;
    }
}
`