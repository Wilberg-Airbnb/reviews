import React from 'react';
import styled ,{keyframes}from 'styled-components';
import ReviewSection from '../Review/Review.jsx';
import AverageReview from '../AverageReview/AverageReview.jsx';
import ReviewBar from '../ReviewBar/ReviewBar.jsx';


const open =keyframes`

 #review & {
  from{
    transform : translateY(40%);
  }

  to{
    transform:translateY(0);
  }
}

#reviewmodal-root & {
  from{
    transform : translateY(40%);
  }

  to{
    transform:translateY(0);
  }
}
`;


const ProfileModal = styled.div`
#review & {
  background-color: rgba(0,0,0,0.6);
  position:fixed;
  height:100%;
  width:100%;
  top:0;
  left:0;
  display:flex;
  align-items: center;
  justify-content: center;
  z-index:999;
  overflow:hidden;
}

#reviewmodal-root & {
  background-color: rgba(0,0,0,0.6);
  position:fixed;
  height:100%;
  width:100%;
  top:0;
  left:0;
  display:flex;
  align-items: center;
  justify-content: center;
  z-index:999;
  overflow:hidden;
}

`;

const Container = styled.div`
#review & {
  height:87%;
  width:55%;
  background-color: white;
  border-radius:15px 15px 0px 15px;
  padding:2rem 0rem 1rem 2rem;
  animation: ${open} 0.3s linear;
  overflow:hidden;
}

#reviewmodal-root & {
  height:87%;
  width:55%;
  background-color: white;
  border-radius:15px 15px 0px 15px;
  padding:2rem 0rem 1rem 2rem;
  animation: ${open} 0.3s linear;
  overflow:hidden;
}
`;


const ReviewContainer = styled.div`

#review & {
  display:flex;
  position:relative;
  top:0;
  bottom:0;
  left:0;
  right:0;
  overflow-y:scroll;
  scrollbar-color:#f1f1f1;
  scrollbar-width:thick;
  height:100%;
}

#reviewmodal-root & {
  display:flex;
  position:relative;
  top:0;
  bottom:0;
  left:0;
  right:0;
  overflow-y:scroll;
  scrollbar-color:#f1f1f1;
  scrollbar-width:thick;
  height:100%;
}
`;

const CloseBox = styled.div`
#review & {
  margin-bottom:1em;
  display:inline-block;
  &:hover{
    cursor:pointer
  };
}

#reviewmodal-root & {
  margin-bottom:1em;
  display:inline-block;
  &:hover{
    cursor:pointer
  };
}
`;

const ReviewScore=styled.div`
#review &{
  width:35%;
  margin-bottom:2rem;
  padding-right:6rem;
}

#reviewmodal-root &{
  width:35%;
  margin-bottom:2rem;
  padding-right:6rem;
}
`;


const ReviewDisplay=styled.div`
#review &{
  width:65%;
  height:100%;
}

#reviewmodal-root &{
  width:65%;
  height:100%;
}
`;


const Profile = ({modalOpen, toggleModal,reviews,average,numbers}) =>{

 if(reviews){
  return (
    <ProfileModal title ='insidemodal'>
      <Container>
        <CloseBox className ="closebox" id ="closebox" onClick={()=>{toggleModal()}}>X</CloseBox>
        <ReviewContainer>
          <ReviewScore>
            <AverageReview average= {average} numbers={numbers} big={true}/>
            <ReviewBar reviews ={reviews} reviewmodal ={true}></ReviewBar>
          </ReviewScore>
          <ReviewDisplay className="reviewdisplay">
            {reviews.map((review,idx)=>{
              return <ReviewSection className="review" review = {review} key={idx}/>
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