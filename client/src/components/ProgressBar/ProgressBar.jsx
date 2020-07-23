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
  height:3px;
  overflow:visible;
  width:120px;
  background-color: #C8C8C8;

`;

const Bar = styled.div`
  color:black;
  height:100%;
  background:black;
  text-align:center;
  float:left;
`;

const Name = styled.div`
  font-size:16px;
  text-align:center;;
`;

const Score=styled.div`
  font-size:12px;
  margin-left:5px;
`;

const Separator= styled.div`
  display:flex;
  align-items: center;
  justify-content:end;
`;


const ProgressBar = ({name,score}) =>{
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
