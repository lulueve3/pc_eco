import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useRouter } from "next/router";

const StyledHeader = styled.header`
    background-color: #001a00;
`;

const Logo = styled(Link)`
    color: yellow;
    text-decoration: none;
    align-items: center;
    display: flex;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;

const StyledNav = styled.nav`
    display: flex;
    gap: 15px;
    align-items: center;
`;

const NavLink = styled(Link)`
    color: #aaa;
`;

export default function Header(){
    const router = useRouter();

    const handleRedirect = ()=>{
        router.push('../user/LoginRegister');
    };

    return(
        <StyledHeader>
            <Center>
                <Wrapper>
                <Logo href={'/'}> Ecommerce</Logo>
                    <StyledNav>
                        <NavLink href={'/'}>Home</NavLink>
                        <NavLink href={'/user/products'}>All Products</NavLink>
                        <NavLink href={'/categories'}>Categories</NavLink>
                        <NavLink href={'/account'}>Account</NavLink>
                        <NavLink href={'/cart'}>Cart (0)</NavLink>
                        <button className="bg-cyan-950 text-green-400 rounded-lg p-2" onClick={handleRedirect}>Login</button>
                    </StyledNav> 
                </Wrapper>
            </Center>
        </StyledHeader>
    )
}