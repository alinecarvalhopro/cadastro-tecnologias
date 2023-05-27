import styled from "styled-components";

export const StyledForm = styled.form`
width: calc(100% - 30px - 2rem);

margin: 15px;

border-radius: 4px;

padding: 1rem;

background-color: var(--greySacale-2);

h1{
    margin-top: 2rem;
    margin-bottom: 1rem;

    font-weight: 700;
    font-size: 14.3916px;
    line-height: 22px;
    color: var(--greySacale-5);
    text-align: center;
}

.instruction {
    margin-bottom: 2rem;

    font-weight: 400;
    font-size: 9.59437px;
    line-height: 18px;
    color: var(--greySacale-4);
    text-align: center;
}

button {
    width: 100%;
    height: 38.38px;

    margin: 1rem 0;

    border: none;
    border-radius: 4px;

    background: var(--primaryColor-negative);

    font-weight: 500;
    font-size: 12.7925px;
    line-height: 21px;
    color: white;

    transition: 1s;
}

button:hover {
    background-color: var(--primaryColor);
}

@media(min-width: 769px) {
    width: 369px;

    margin: 0 auto;

    h1 {
        font-size: 18px;
        line-height: 28px;
    }

    .instruction {
        font-size: 12px;
        line-height: 22px;
    }

    button {
        height: 48px;

        font-size: 16px;
        line-height: 26px;
    }
}
`