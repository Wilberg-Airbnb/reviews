import React from 'react';
import styled from 'styled-components';
import Review from '../Review/Review.jsx';
import AverageReview from '../AverageReview/AverageReview.jsx';
import ReviewBar from '../ReviewBar/ReviewBar.jsx';

const ProfileModal = styled.div`
  background-color: rgba(0,0,0,0.3);
  position:fixed;
  height:100%;
  width:100%;
  top:0;
  left:0;
  display:flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height:93%;
  width:60%;
  background-color: white;
  border-radius:15px 15px 0px 15px;
  padding:2rem 0rem 1rem 2rem;
`;

const ReviewContainer = styled.div`
  display:flex;

`;

const Close = styled.div`
  margin-bottom:1em;
  display:inline-block;
  &:hover{
    cursor:pointer
  };
`;

const ReviewScore=styled.div`
  width:40%;
  margin-bottom:2rem;
  padding-right:6rem;
`;


const ReviewDisplay=styled.div`
  width:60%;
  max-height:950px;
  position:relative;
  bottom:0;
  overflow-y:scroll;
  scrollbar-color:#f1f1f1;
  scrollbar-width:thick;
`;

//fix close problem

const Profile = ({modalOpen, toggleModal,reviews,average,numbers}) =>{

 if(reviews){
  return (
    <ProfileModal onClick={toggleModal}>
      <Container>
        <Close onClick={toggleModal}>X</Close>
        <ReviewContainer>
          <ReviewScore>
            <AverageReview average= {average} numbers={numbers} big={true}/>
            <ReviewBar reviews ={reviews} reviewmodal ={true}></ReviewBar>
          </ReviewScore>
          <ReviewDisplay>
            {reviews.map((review,idx)=>{
              return <Review review = {review} key={idx}/>
            })}
          </ReviewDisplay>
        </ReviewContainer>
      </Container>
    </ProfileModal>
  )
 }else{
   return null
 }

}

export default Profile;