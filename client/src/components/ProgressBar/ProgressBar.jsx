import React from 'react';
// import { Progress } from 'reactstrap';
import styled from 'styled-components';
const ReviewScore = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:1.5rem;
  align-items: center;
`;

const Progress = styled.div`
  margin-bottom:0.3rem;
  height:5px;
  overflow:visible;
  width:140px;

`;

const Bar = styled.div`
  color:black;
  height:100%;
  background:black;
  text-align:center;

`;

const Name = styled.div`
  font-size:16px;
  text-align:center;;
`;

const Score=styled.div`
  font-size:12px;
`;

const Separator= styled.div`
  display:flex;
  align-items: center;
`;


const ProgressBar = ({name,score}) =>{
  console.log(score.toFixed(1))
  return (
    <ReviewScore>
      <Name>{name}</Name>
      <Separator>
        <Progress>
          <Bar style={{width:`${parseFloat((score/5)*100).toFixed(1)}%`}}></Bar>
        </Progress>
        <Score>{`${(score).toFixed(1)}`}</Score>
      </Separator>
    </ReviewScore>
  )}

  export default ProgressBar;



  // <Progress value={parseFloat((score/5)*100).toFixed(1)} />
