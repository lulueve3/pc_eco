import Button from "@/Components/Button";
import { CartContext } from "@/Components/CartContext";
import Center from "@/Components/Center";
import Header from "@/Components/Header";
import { useContext } from "react";
import styled from "styled-components";

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.3fr .7fr;
    gap: 40px;
    margin-top: 40px;
`;

const Box = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
`;

const H2 = styled.h2`
    font-weight: bold;
    font-size: large;
`;

export default function CartPage() {
    const { cartProducts } = useContext(CartContext);
    return (
        <>
            <Header />
            <Center>
                <ColumnsWrapper>
                    <Box>
                        {!cartProducts?.length && (
                            <div>Your cart is empty</div>
                        )}
                        {cartProducts?.length > 0 && (
                            <>
                                <h2>Cart</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                            <>
                                                {cartProducts.map(product => (
                                                    <td>{product}</td>
                                                ))}
                                            </>

                                        </tr>

                                    </tbody>
                                </table>
                            </>
                        )}


                    </Box>
                    <Box>
                        <H2>Order Information</H2>
                        <input type="text" placeholder="Address"></input>
                        <Button block primary>Continue to payment</Button>
                    </Box>
                </ColumnsWrapper>
            </Center>
        </>
    )
}