import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";

const Bg = styled.div`
    background-color: #001a00;
`;

const Title = styled.h1`
    margin-bottom: 20px;
    font-weight: bold;
    color: #005ce6;
    font-size: 3rem;
`;

const Desc = styled.p`
    color: #aaa;
    font-size: .8rem;
`;

const ColumnWrapper = styled.div`
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    gap: 40px;
    img{
        max-width: 100%;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 20px;
`;

const Column = styled.div`
    display: flex;
    align-items: center;
`;

export default function Featured({product}) {
    return (
        <Bg>
            <Center>
                <ColumnWrapper>
                    <Column>
                        <div>
                            <Title> Pro Anywhere</Title>
                            <Desc>In this tutorial, You will learn how to build a fullstack ecommerce app using next.js and mongo database. It will be 2 projects with a lot of cool functionality.</Desc>
                            <ButtonWrapper>
                                <Button white outline size='l'>Read more</Button>
                                <Button primary size="l">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>

                                    Add to cart</Button>
                            </ButtonWrapper>
                        </div>
                    </Column>
                    <Column >
                        <img src="https://images2.thanhnien.vn/528068263637045248/2023/6/14/anh-man-hinh-2023-06-14-luc-105756-1686715090110905048340.png" alt="" />
                    </Column>

                </ColumnWrapper>
            </Center>
        </Bg>
    )
}