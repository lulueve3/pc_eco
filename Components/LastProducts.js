import styled from "styled-components"
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding-top: 20px;
`;


export default function LastProducts({ lastProducts }) {
    return (
        <Center>
            <ProductsGrid>
                {lastProducts.length > 0 && lastProducts.map(product => (
                    // eslint-disable-next-line react/jsx-key
                    <ProductBox {...product}/>
                ))}
            </ProductsGrid>
        </Center>

    );
}