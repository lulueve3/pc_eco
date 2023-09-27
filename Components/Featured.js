import styled from "styled-components";
import Center from "./Center";

const Bg = styled.div`
    background-color: #222;
`;

const Title = styled.h1`
    margin: 0;
    font-weight: bold;
    color: #005ce6;
    padding: 50px 0;
`;

const Desc = styled.p`
    color: #aaa;
    font-size: .8rem;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    img{
        max-width: 100%;
    }
`;

export default function Featured() {
    return (
        <Bg>
            <Center>
                <Wrapper>
                    <div>
                        <Title> Pro Anywhere</Title>
                        <Desc>In this tutorial, You will learn how to build a fullstack ecommerce app using next.js and mongo database. It will be 2 projects with a lot of cool functionality.</Desc>
                    </div>
                    <div>
                        <img src="https://images2.thanhnien.vn/528068263637045248/2023/6/14/anh-man-hinh-2023-06-14-luc-105756-1686715090110905048340.png" alt="" />
                    </div>
                    
                </Wrapper>
            </Center>
        </Bg>
    )
}