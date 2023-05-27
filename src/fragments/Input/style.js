import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
    width: 100%;

    display: flex;
    flex-direction: column;

label {
    margin-bottom: 1rem;
    margin-top: 1rem;

    font-weight: 400;
    font-size: 9.772px;
    line-height: 0px;
    color: var(--greySacale-5);
}

input {
    width: calc(100% - 1.2rem);
    height: 38.38px;

    margin-bottom: 1rem;

    border: 1px solid var(--greySacale-3);
    border-radius: 4px;

    padding-left: 1rem;

    background-color: var(--greySacale-3);

    transition: 1s;
}

input::placeholder {
    font-weight: 400;
    font-size: 13.0293px;
    line-height: 21px;
    color: --greySacale-4;
}

input:hover {
    border: 1px solid var(--greySacale-5);

    color: var(--greySacale-5);
}

@media(min-width: 769px) {
    label {
        font-size: 12.182px;
    }

    input {
        height: 48px;
    }

    input::placeholder {
        font-size: 16.2426px;
        line-height: 26px;
    }

}
`