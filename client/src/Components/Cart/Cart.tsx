import React from "react";
import styled from "styled-components";
import { CurrencyEnum } from "../Products/Products";
import { useAppSelector } from "../../hooks/redux";
import { CartItem } from "./CartItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageName = styled.h1`
  font-size: 2em;
  font-weight: 700;
  margin: 2.4em 0 2.2em 3em;
  text-transform: uppercase;
`;

export const Cart: React.FC<PropsType> = ({ isInHeader }): JSX.Element => {
  const selectedProducts = useAppSelector(
    (state) => state.cart.selectedProducts
  );

  const { currency } = useAppSelector((state) => state.header);
  const currencyIndex = CurrencyEnum[currency];

  return (
    <Wrapper>
      {!isInHeader && <PageName>Cart</PageName>}
      {selectedProducts
        && Object.keys(selectedProducts).map((goods) => (
          <CartItem
            key={goods}
            goods={goods}
            selectedProducts={selectedProducts}
            currencyIndex={currencyIndex}
            isInHeader={isInHeader}
          />
        ))}
    </Wrapper>
  );
};

interface PropsType {
  isInHeader: boolean;
}
