import styled from "styled-components";

export const StyledFieldset = styled.fieldset`

display: flex;
flex-direction: column;

label {

    font-weight: 400;
    font-size: 12.182px;
    color: var(--greySacale-5);
}

select {
    width: 100%;
    height: 38.38px;
    
    margin-top: 0.5rem;
    
    border: 1px solid var(--greySacale-3);
    border-radius: 4px;
    
    padding-left: 1rem;
    
    background-color: var(--greySacale-3);
    
    font-weight: 400;
    font-size: 12.9865px;
    line-height: 21px;
    color: var(--greySacale-4);
}

@media(min-width: 796px) {
    font-size: 16.2426px;
    line-height: 26px;

    select {
        height: 48px;
    }
}

`