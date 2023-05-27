import styled from "styled-components";

export const StyledNav = styled.nav`
width: calc(100% - 25px);
height: 72px;

border-bottom: 1px solid var(--greySacale-3);

padding: 0 15px 0 10px;

background-color: var(--greySacale-1);

display: flex;
justify-content: space-between;
align-items: center;

position: fixed;
top: 0;
left: 0;

img {
    width: 105.53px;
}

div {
    height: 32px;
    border-radius: 4px;
    
    padding: 0 16px;

    background-color: var(--greySacale-3);

    display: flex;
    justify-content: space-between;
    align-items: center;
}

a {
    font-family: 'Inter', sans-serif;

    text-decoration: none;
    color: white;
}

@media(min-width: 769px) {
    img {
        margin-left: 115px;
    }

    div {
        margin-right: 100px;
    }
}

`