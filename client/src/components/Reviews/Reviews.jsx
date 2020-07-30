import React from 'react';
import styled from 'styled-components';
import ReviewSection from '../Review/Review.jsx';


const FilterReviewsContainer = styled.div`
#review & {
  display:grid;
  grid-template-columns:auto auto;
  margin-bottom:10px;
  justify-content: space-between;
  grid-column-gap:8%;
}

#reviewmodal-root & {
  display:grid;
  grid-template-columns:auto auto;
  margin-bottom:10px;
  justify-content: space-between;
  grid-column-gap:8%;
}
`;

const Reviews= ({reviews}) =>{
  var selectReviews = reviews.filter((review,idx)=>{
    return idx<6
  });

return (
  <FilterReviewsContainer>
    {selectReviews.map((review,idx)=>{
      return <ReviewSection className="reviewsection" review = {review} key={idx}/>
    })}
  </FilterReviewsContainer>
)}

export default Reviews