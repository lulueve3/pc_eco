import styled from "styled-components"
import Button from "./Button";
import CurrencyFormat from "./CurencyFormat";
import Link from "next/link";

const ProductWrapper = styled.div`

`;

const AddToCart = styled.div`
    display: none;
    position: absolute;
    margin-bottom: 0;
    bottom: 0;
    right: 0;
`;

const Box = styled(Link)`
    background-color: #fff;
    padding: 20px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    position: relative;
    
    img{
        max-width: 100%;
        max-height: 160px;
    }
    
    &:hover ${AddToCart} {
        display: block;
    }
`;

const Titile = styled(Link)`
    font-weight: normal;
    font-size:0.9rem;
    margin: 0;
  
`;

const ProductInfoBox = styled.div`
    margin-top: 10px;
    
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;
  justify-content: space-between;
 `;

const Price = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    color: #ff0000;
 `;




export default function ProductBox({ id ,titile, desc, price, images }) {
    const url = '/product/'+id;
    return (
        <ProductWrapper>
            <Box href={url}>
                <AddToCart>
                    <Button primary outline>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        Add to cart
                    </Button>
                </AddToCart>

                <div>
                    <img src={images} alt="" />
                </div>
            </Box>
            <ProductInfoBox>
                <Titile href={url}>{titile}</Titile>
                <PriceRow>
                    <Price>

                        <CurrencyFormat amount={price} />

                    </Price>
                </PriceRow>
            </ProductInfoBox>

        </ProductWrapper>

    );
}