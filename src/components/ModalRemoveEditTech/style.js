import styled from "styled-components";

export const StyledDiv = styled.div`
    width: 100%;

    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    justify-content: center;

.modalContainer {
    width: calc(100% - 30px);
    
    border-radius: 4px;
    
    background-color: var(--greySacale-2);
    
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
}

.boxTitleClose {
    width: 100%;
    height: 40.11px;

    border-radius: 4px 4px 0 0;

    background-color: var(--greySacale-3); 

    display: flex;
    justify-content: space-between;
    align-items: center;
}

h3 {
    margin-left: 15px;

    font-weight: 700;
    font-size: 11.2304px;
    line-height: 19px;
    color: var(--greySacale-5)
}

.close {
    margin-right: 15px;

    border: none;
    background-color: var(--greySacale-3);

    font-weight: 600;
    font-size: 12.8347px;
    line-height: 21px;
    color: var(--greySacale-4)
}

form {
    width: calc(100% - 30px);

    padding: 1rem;
}

.boxButtonsEditRemove {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.submitEdit {
    width: 62%;
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

.submitEdit:hover {
    background-color: var(--primaryColor);
}

    .submitRemove {

    width: 33%;
    height: 38.38px;

    margin: 1rem 0;

    border: none;
    border-radius: 4px;

    background: var(--greySacale-4);

    text-decoration: none;
    font-weight: 500;
    font-size: 12.7925px;
    line-height: 21px;
    color: var(--greySacale-5);

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 1s;
}

.submitRemove:hover {
    background: var(--greySacale-3);
}

@media(min-width: 769px) {

    .modalContainer {
        width: 369px;
    }

    h3 {
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
    }

    .close {
        font-size: 16px;
        line-height: 26px;
    }

    .submit {
        height: 48px;

        font-size: 16px;
        line-height: 26px;
    }
}
`