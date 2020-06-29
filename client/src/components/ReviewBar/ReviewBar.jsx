import { Progress } from 'reactstrap';
import React from 'react';
import styled from 'styled-components';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';

const ReviewContainer = styled.div`
      display:grid;
      grid-template-columns:auto auto;
      padding:10px;
      margin-bottom:15px;
`;
const ReviewBar = (props) => {
  const reviews = props.reviews;

  if (reviews.length > 1) {
    return (
      <ReviewContainer>
        <ProgressBar name={'Cleanliness'} score={reviews.reduce((a,b) => {
      return a+b.cleanliness
    },0)/reviews.length}></ProgressBar>
        <ProgressBar name={'Accuracy'} score={reviews.reduce((a,b) => {
      return a+b.accuracy
    },0)/reviews.length}></ProgressBar>
        <ProgressBar name={'Communication'} score={reviews.reduce((a,b) => {
      return a+b.communication
    },0)/reviews.length}></ProgressBar>
        <ProgressBar name={'Location'} score={reviews.reduce((a,b) => {
      return a+b.location
    },0)/reviews.length}></ProgressBar>
        <ProgressBar name={'Check-in'} score={reviews.reduce((a,b) => {
      return a+b.checkIn
    },0)/reviews.length}></ProgressBar>
        <ProgressBar name={'Value'} score={reviews.reduce((a,b) => {
      return a+b.value
    },0)/reviews.length}></ProgressBar>
      </ReviewContainer>
    )
  }else{
    return null
  }


}

export default ReviewBar;