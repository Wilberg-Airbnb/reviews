import React from 'react';
import styled from 'styled-components';


const ReviewContainer=styled.div`
  display:flex;
`;

const Star = styled.div`

`;

const ReviewScore = styled.h1`
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