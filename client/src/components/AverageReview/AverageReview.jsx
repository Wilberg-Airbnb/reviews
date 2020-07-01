import React from 'react';
import styled from 'styled-components';


const ReviewContainer=styled.div`
  display:flex;
  align-items:center;
  margin-bottom:2rem;
`;

const Star = styled.div`
  background: #E75480;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  display: inline-block;
  height: ${({big})=> big? '30px' : '15px'};
  width: ${({big})=> big? '30px' : '15px'};
  margin-right:4px;
}
`;

const ReviewScore = styled.div`
  font-size: ${({big})=> big? '32px' : '20px'};
  font-weight: ${({big})=> big? 'bold' : 'normal'}
`;
const AverageReview = ({average, numbers,big}) =>{
  return (
    <ReviewContainer>
      <Star big ={big}></Star>
      <ReviewScore big = {big}>{`${average} (${numbers} reviews)`}</ReviewScore>
    </ReviewContainer>
  )}

  export default AverageReview