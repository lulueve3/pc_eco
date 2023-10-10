import styled, {css} from "styled-components";

const StyledButton = styled.button`
    border: 0;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;

    ${props => props.primary && props.block && css`
        display: block;
        width: 100%;
        padding: 2px;
        margin-top: 20px;
    `}

    ${props => props.white && !props.outline && css`
        background-color: #fff;
        color: #000;
    `}

    ${props => props.white && props.outline && css`
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;
    `}

    ${props => props.primary && css`
        background-color: #1a75ff;
        color: #fff;
        border: 1px solid #1a75ff;
        svg{
        height: 30px;
        margin-right: 5px;
    }
   `}

   ${props => props.primary && props.outline && css`
        background-color: #1a75ff;
        color: #fff;
        border: 1px solid #1a75ff;
        svg{
        height: 30px;
        margin-right: 5px;
    }
   `}

    ${props => props.size === 'l' && css `
        font-size:1.2rem;
        padding: 5px 10px;
    `}
`;
export default function Button({children,...rest}){
    return(
        <StyledButton {...rest}>{children}</StyledButton>
    );
}