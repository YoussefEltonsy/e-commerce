import React from 'react';
import styled from 'styled-components';
import ProductCard from '../layout/ProductCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const ProductGrid = ({ products }) => {
  return (
    <Grid>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default ProductGrid; 