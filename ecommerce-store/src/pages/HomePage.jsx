import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchProducts } from '../store/slices/productSlice';
import ProductGrid from '../components/products/ProductGrid';
import ProductSlider from '../components/products/ProductSlider';

const HomeContainer = styled.div`
  padding: 2rem;
`;

const HomePage = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <HomeContainer>
      <h1>Featured Products</h1>
      <ProductSlider products={items.slice(0, 5)} />
      
      <h2>All Products</h2>
      <ProductGrid products={items} />
    </HomeContainer>
  );
};

export default HomePage; 