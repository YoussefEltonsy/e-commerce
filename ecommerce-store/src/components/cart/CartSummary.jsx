import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Summary = styled.div`
  background: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 4px;
  margin-top: ${({ theme }) => theme.spacing.md};
  
  &:hover {
    opacity: 0.9;
  }
`;

const CartSummary = () => {
  const { items, total } = useSelector(state => state.cart);
  const navigate = useNavigate();

  const subtotal = total;
  const shipping = 10;
  const tax = subtotal * 0.1;
  const finalTotal = subtotal + shipping + tax;

  return (
    <Summary>
      <h2>Order Summary</h2>
      <SummaryItem>
        <span>Subtotal ({items.length} items)</span>
        <span>${subtotal.toFixed(2)}</span>
      </SummaryItem>
      <SummaryItem>
        <span>Shipping</span>
        <span>${shipping.toFixed(2)}</span>
      </SummaryItem>
      <SummaryItem>
        <span>Tax</span>
        <span>${tax.toFixed(2)}</span>
      </SummaryItem>
      <SummaryItem>
        <strong>Total</strong>
        <strong>${finalTotal.toFixed(2)}</strong>
      </SummaryItem>
      <CheckoutButton onClick={() => navigate('/checkout')}>
        Proceed to Checkout
      </CheckoutButton>
    </Summary>
  );
};

export default CartSummary; 