import styled from "styled-components";

export const StyledLi = styled.li`
    width: calc(100% - 15px - 2rem);
    height: 48px;

    margin: 8px 0;

    padding-left: 1rem;
    padding-right: 1rem;

    border-radius: 4px;

    background-color: var(--greySacale-1);

    display: flex;
    justify-content: space-between;
    align-items: center;

    transition: 0.8s;

    :hover {
        background-color: var(--greySacale-3);        
    }

h3 {
    padding: 0;

    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;
    color: var(--greySacale-5)
}

p {
    margin: 0;

    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
}

@media(min-width: 769px) {
    width: calc(100% - 15px - 3rem);
}
`