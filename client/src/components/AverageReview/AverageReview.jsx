import React from 'react';
import styled from 'styled-components';


const ReviewContainer=styled.div`
#review & {
  display:flex;
  align-items:center;
  margin-bottom:2rem;
}

#reviewmodal-root & {
  display:flex;
  align-items:center;
  margin-bottom:2rem;
}



`;

const AirbnbStar = styled.div`
#review & {
  background: #FF385C;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  display: inline-block;
  height: ${({big})=> big? '30px' : '15px'};
  width: ${({big})=> big? '30px' : '15px'};
  margin-right:4px;
}
}

#reviewmodal-root & {
  background: #FF385C;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  display: inline-block;
  height: ${({big})=> big? '30px' : '15px'};
  width: ${({big})=> big? '30px' : '15px'};
  margin-right:4px;
}
}

`;

const ReviewScore_andy = styled.div`
  #review & {

  font-size: ${({big})=> big? '3.0vmin' : '2.0vmin'};
  font-weight: ${({big})=> big? 'bold' : 'normal'};
  }

  #reviewmodal-root & {

    font-size: ${({big})=> big? '3.0vmin' : '2.0vmin'};
    font-weight: ${({big})=> big? 'bold' : 'normal'};
    }
`;



const AverageReview = ({average, numbers,big}) =>{
  return (
    <ReviewContainer>
      <AirbnbStar className ="AirbnbStar" big ={big}></AirbnbStar>
      <ReviewScore_andy className="ReviewScore_andy" big = {big}>{`${average} (${numbers} reviews)`}</ReviewScore_andy>
    </ReviewContainer>
  )}

  export default AverageReview