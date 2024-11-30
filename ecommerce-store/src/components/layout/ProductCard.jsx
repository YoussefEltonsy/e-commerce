import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaStar } from 'react-icons/fa';

const Card = styled(motion.div)`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  width: 280px;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const ProductTitle = styled.h3`
  margin: 0.5rem 0;
  font-size: 1rem;
  height: 2.4em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;

  &:hover {
    opacity: 0.9;
  }
`;

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card
      whileHover={{ scale: 1.05 }}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>${product.price}</ProductPrice>
      <div>
        <FaStar color="#ffd700" />
        <span>{product.rating.rate} ({product.rating.count})</span>
      </div>
      <AddToCartButton>
        <FaShoppingCart /> Add to Cart
      </AddToCartButton>
    </Card>
  );
};

export default ProductCard;