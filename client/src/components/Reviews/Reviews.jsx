import React from 'react';
import styled from 'styled-components';
import Review from '../Review/Review.jsx';


const FilterReviewsContainer = styled.div`
  display:grid;
  grid-template-columns:auto auto;
  margin-bottom:10px;
  justify-content: space-between;
  grid-column-gap:8%;
`;

const Reviews= ({reviews}) =>{
  var selectReviews = reviews.filter((review,idx)=>{
    return idx<6
  });

return (
  <FilterReviewsContainer>
    {selectReviews.map((review,idx)=>{
      return <Review className="review" review = {review} key={idx}/>
    })}
  </FilterReviewsContainer>
)}

export default Reviews