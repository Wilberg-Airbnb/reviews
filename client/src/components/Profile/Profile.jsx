import React from 'react';
import styled ,{keyframes}from 'styled-components';
import Review from '../Review/Review.jsx';
import AverageReview from '../AverageReview/AverageReview.jsx';
import ReviewBar from '../ReviewBar/ReviewBar.jsx';


const open =keyframes`
  from{
    transform : translateY(40%);
  }

  to{
    transform:translateY(0);
  }
`;


const ProfileModal = styled.div`
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
`;

const Container = styled.div`
  height:87%;
  width:55%;
  background-color: white;
  border-radius:15px 15px 0px 15px;
  padding:2rem 0rem 1rem 2rem;
  animation: ${open} 0.3s linear;
  overflow:hidden;
`;

//animation: ${open} 0.3s linear;
const ReviewContainer = styled.div`
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

`;

const Close = styled.div`
  margin-bottom:1em;
  display:inline-block;
  &:hover{
    cursor:pointer
  };

`;

const ReviewScore=styled.div`
  width:35%;
  margin-bottom:2rem;
  padding-right:6rem;
`;


const ReviewDisplay=styled.div`
  width:65%;
  height:100%;

`;


const Profile = ({modalOpen, toggleModal,reviews,average,numbers}) =>{

 if(reviews){
  return (
    <ProfileModal title ='insidemodal'>
      <Container>
        <Close className ="close" id ="close" onClick={()=>{toggleModal()}}>X</Close>
        <ReviewContainer>
          <ReviewScore>
            <AverageReview average= {average} numbers={numbers} big={true}/>
            <ReviewBar reviews ={reviews} reviewmodal ={true}></ReviewBar>
          </ReviewScore>
          <ReviewDisplay className="reviewdisplay">
            {reviews.map((review,idx)=>{
              return <Review className="review" review = {review} key={idx}/>
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


// class Profile extends React.Component {
//   constructor(props){
//     super(props)


//     this.state ={

//     }


//   }

//   render(){
//     let {modalOpen,toggleModal,reviews,average,numbers} = this.props
//       if(reviews){
//         return (
//           <ProfileModal title ='insidemodal'>
//             <Container modal2={this.state.open} modal={modalOpen}>
//               <Close className ="close" id ="close" onClick={()=>{toggleModal()}}>X</Close>
//               <ReviewContainer>
//                 <ReviewScore>
//                   <AverageReview average= {average} numbers={numbers} big={true}/>
//                   <ReviewBar reviews ={reviews} reviewmodal ={true}></ReviewBar>
//                 </ReviewScore>
//                 <ReviewDisplay className="reviewdisplay">
//                   {reviews.map((review,idx)=>{
//                     return <Review className="review" review = {review} key={idx}/>
//                   })}
//                 </ReviewDisplay>
//               </ReviewContainer>
//             </Container>
//           </ProfileModal>
//         )
//        }else{
//          return null
//        }

//   }
// }

export default Profile;