import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import CartSummary from '../components/cart/CartSummary';

const CheckoutContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.success};
  color: white;
  padding: 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.875rem;
`;

const CheckoutPage = () => {
  const { items } = useSelector(state => state.cart);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Order placed:', { order: data, items });
    // Handle order submission
  };

  return (
    <CheckoutContainer>
      <div>
        <h1>Checkout</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2>Shipping Information</h2>
          <Input
            {...register('fullName', { required: 'Full name is required' })}
            placeholder="Full Name"
          />
          {errors.fullName && <ErrorMessage>{errors.fullName.message}</ErrorMessage>}

          <Input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address'
              }
            })}
            placeholder="Email"
            type="email"
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

          <Input
            {...register('address', { required: 'Address is required' })}
            placeholder="Address"
          />
          {errors.address && <ErrorMessage>{errors.address.message}</ErrorMessage>}

          <Input
            {...register('city', { required: 'City is required' })}
            placeholder="City"
          />
          {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}

          <Input
            {...register('zipCode', { required: 'ZIP code is required' })}
            placeholder="ZIP Code"
          />
          {errors.zipCode && <ErrorMessage>{errors.zipCode.message}</ErrorMessage>}

          <h2>Payment Information</h2>
          <Input
            {...register('cardNumber', { 
              required: 'Card number is required',
              pattern: {
                value: /^\d{16}$/,
                message: 'Invalid card number'
              }
            })}
            placeholder="Card Number"
          />
          {errors.cardNumber && <ErrorMessage>{errors.cardNumber.message}</ErrorMessage>}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <Input
              {...register('expiryDate', { required: 'Expiry date is required' })}
              placeholder="MM/YY"
            />
            <Input
              {...register('cvv', { 
                required: 'CVV is required',
                pattern: {
                  value: /^\d{3,4}$/,
                  message: 'Invalid CVV'
                }
              })}
              placeholder="CVV"
            />
          </div>
          {(errors.expiryDate || errors.cvv) && (
            <ErrorMessage>{errors.expiryDate?.message || errors.cvv?.message}</ErrorMessage>
          )}

          <Button type="submit">Place Order</Button>
        </Form>
      </div>
      <CartSummary />
    </CheckoutContainer>
  );
};

export default CheckoutPage; 