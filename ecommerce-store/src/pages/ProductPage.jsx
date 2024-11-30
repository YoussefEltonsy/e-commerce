import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { addToCart } from '../store/slices/cartSlice';
import axios from 'axios';

const ProductContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const ProductInfo = styled.div`
  h1 {
    margin-bottom: 1rem;
  }
`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0;
`;

const AddToCartButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.title} />
      <ProductInfo>
        <h1>{product.title}</h1>
        <Price>${product.price}</Price>
        <div>
          <FaStar color="#ffd700" />
          <span>{product.rating.rate} ({product.rating.count} reviews)</span>
        </div>
        <p>{product.description}</p>
        <AddToCartButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => dispatch(addToCart(product))}
        >
          <FaShoppingCart /> Add to Cart
        </AddToCartButton>
      </ProductInfo>
    </ProductContainer>
  );
};

export default ProductPage; 