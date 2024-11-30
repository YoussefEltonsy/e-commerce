import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../store/slices/cartSlice';
import { FaTrash } from 'react-icons/fa';

const Item = styled.div`
  display: grid;
  grid-template-columns: 100px 2fr 1fr 1fr auto;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const QuantityInput = styled.input`
  width: 60px;
  padding: 0.5rem;
  text-align: center;
`;

const DeleteButton = styled.button`
  color: ${({ theme }) => theme.colors.danger};
  &:hover {
    opacity: 0.8;
  }
`;

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    if (quantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity }));
    }
  };

  return (
    <Item>
      <ProductImage src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>${item.price}</p>
      </div>
      <QuantityInput
        type="number"
        min="1"
        value={item.quantity}
        onChange={handleQuantityChange}
      />
      <div>${(item.price * item.quantity).toFixed(2)}</div>
      <DeleteButton onClick={() => dispatch(removeFromCart(item.id))}>
        <FaTrash />
      </DeleteButton>
    </Item>
  );
};

export default CartItem; 