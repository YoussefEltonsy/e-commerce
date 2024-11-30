import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../layout/ProductCard';

const SliderWrapper = styled.div`
  margin: 2rem 0;
  .slick-slide {
    padding: 0 10px;
  }
`;

const ProductSlider = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default ProductSlider; 