import styled from "styled-components";

export const StyledNav = styled.nav`
width: calc(100% - 30px);
height: 72px;

margin-top: 28px;

padding: 0px 15px;

.box {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

img {
    width: 105.53px;
}

a {
    height: 32px;
    
    border-radius: 4px;
    
    padding: 0 16px;
    
    background-color: var(--greySacale-3);
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Inter', sans-serif;

    font-weight: 600;
    font-size: 9.59437px;
    line-height: 23px;
    text-decoration: none;
    color: white;
}

@media(min-width: 769px) {
    width: 100%;
    
    padding: 0;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    .box {
    width: 399px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    }

    a {
        font-size: 12px;
        line-height: 28px;
    }
}

`