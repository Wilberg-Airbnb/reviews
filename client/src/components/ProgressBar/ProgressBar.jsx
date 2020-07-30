import React from 'react';
// import { Progress } from 'reactstrap';
import styled from 'styled-components';


const ReviewScore = styled.div`

#review & {
  display:flex;
  justify-content:space-between;
  margin-bottom:1.5rem;
  align-items: center;
  width:100%;
}

#reviewmodal-root & {
  display:flex;
  justify-content:space-between;
  margin-bottom:1.5rem;
  align-items: center;
  width:100%;
}
`;

const Progress = styled.div`
#review & {
  margin-bottom:0.3rem;
  height:0.44vmin;
  overflow:visible;
  width:12.0vmin;
  background-color: #C8C8C8;
}

#reviewmodal-root & {
  margin-bottom:0.3rem;
  height:0.44vmin;
  overflow:visible;
  width:12.0vmin;
  background-color: #C8C8C8;
}
`;

const Bar = styled.div`
#review & {
  color:black;
  height:100%;
  background:black;
  text-align:center;
  float:left;
}

#reviewmodal-root & {
  color:black;
  height:100%;
  background:black;
  text-align:center;
  float:left;
}
`;

const Name = styled.div`
#review & {
  font-size:1.6vmin;
  width:35%;
}

#reviewmodal-root & {
  font-size:1.6vmin;
  width:35%;
}
`;

const Score=styled.div`
#review & {
  font-size:1.2vmin;
  margin-left:5px;
}

#reviewmodal-root & {
  font-size:1.2vmin;
  margin-left:5px;
}
`;

const Separator= styled.div`
#review & {
  display:flex;
  align-items: center;
  justify-content:end;
}

#reviewmodal-root & {
  display:flex;
  align-items: center;
  justify-content:end;
}
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
