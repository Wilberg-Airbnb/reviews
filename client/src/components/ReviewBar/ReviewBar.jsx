// import { Progress } from 'reactstrap';
import React from 'react';
import styled from 'styled-components';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';

const ReviewsContainer = styled.div`
      display:grid;
      grid-template-columns:${({reviewmodal})=> reviewmodal? 'auto' : 'auto auto'};
      margin-bottom:15px;
      grid-column-gap:${({reviewmodal})=> reviewmodal? '0%' : '8%'};
      align-items: end;
      width:100%;
`;
const ReviewBar = (props) => {
  const reviews = props.reviews;

  if (reviews.length > 1) {
    return (
      <ReviewsContainer className="ReviewsContainer"reviewmodal={props.reviewmodal}>
        <ProgressBar className="progressbar" name={'Cleanliness'} score={reviews.reduce((a,b) => {
      return a+b.cleanliness
    },0)/reviews.length}></ProgressBar>
        <ProgressBar className="progressbar" name={'Accuracy'} score={reviews.reduce((a,b) => {
      return a+b.accuracy
    },0)/reviews.length}></ProgressBar>
        <ProgressBar className="progressbar" name={'Communication'} score={reviews.reduce((a,b) => {
      return a+b.communication
    },0)/reviews.length}></ProgressBar>
        <ProgressBar className="progressbar" name={'Location'} score={reviews.reduce((a,b) => {
      return a+b.location
    },0)/reviews.length}></ProgressBar>
        <ProgressBar className="progressbar" name={'Check-in'} score={reviews.reduce((a,b) => {
      return a+b.checkIn
    },0)/reviews.length}></ProgressBar>
        <ProgressBar className="progressbar" name={'Value'} score={reviews.reduce((a,b) => {
      return a+b.value
    },0)/reviews.length}></ProgressBar>
      </ReviewsContainer>
    )
  }else{
    return null
  }


}

export default ReviewBar;
