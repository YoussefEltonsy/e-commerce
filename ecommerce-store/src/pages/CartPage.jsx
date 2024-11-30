import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';

const CartContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const CartGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 2rem;
`;

const CartPage = () => {
  const { items } = useSelector(state => state.cart);

  if (items.length === 0) {
    return (
      <CartContainer>
        <EmptyCart>
          <h2>Your cart is empty</h2>
          <p>Add some items to your cart to see them here.</p>
        </EmptyCart>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <h1>Shopping Cart</h1>
      <CartGrid>
        <div>
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <CartSummary />
      </CartGrid>
    </CartContainer>
  );
};

export default CartPage; 