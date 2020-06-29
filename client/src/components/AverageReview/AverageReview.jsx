import React from 'react';
import styled from 'styled-components';


const ReviewContainer=styled.div`
  display:flex;
  align-items:center;
`;

const Star = styled.div`
  background: #E75480;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  display: inline-block;
  height: 15px;
  width: 15px;
  margin-right:4px;
}
`;

const ReviewScore = styled.div`
  font-size:20px;
`;
const AverageReview = ({average, numbers}) =>{
  return (
    <ReviewContainer>
      <Star></Star>
      <ReviewScore>{`${average} (${numbers} reviews)`}</ReviewScore>
    </ReviewContainer>
  )}

  export default AverageReview