import React from 'react';
import { Progress } from 'reactstrap';
import styled from 'styled-components';
const ReviewScore = styled.div`

  margin:5px;
`;


const ProgressBar = ({name,score}) =>{
  return (
    <ReviewScore>
      <div>{name}</div>
      <Progress value={parseFloat((score/5)*100).toFixed(1)} />
      <div>{`${parseFloat((score).toFixed(1))}`}</div>
    </ReviewScore>
  )}

  export default ProgressBar;