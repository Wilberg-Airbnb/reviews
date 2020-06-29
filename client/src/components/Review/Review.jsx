import React from 'react';
import styled from 'styled-components';


const ReviewContainer = styled.div`
  margin-bottom:30px;
`;

const Profile = styled.div`
  display:flex;
  margin-bottom:10px;
`;

const Image = styled.img`
  vertical-align:middle;
  width:50px;
  height:50px;
  border-radius:50%;
  margin-right: 5px;
`;

const Comments = styled.div`
  font-size:14px;

`;

const Nameinfo = styled.div`
  & > h1{
    font-size:12px;
  }
`;

const Span = styled.span`
  font-weight:bold;
  text-decoration: underline;

  &:hover{
    cursor:pointer;
  }
  `;

class Review extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      hidden: false,
      comments:this.props.review.comments,
      firstname:this.props.review.firstname,
      avatarURL:this.props.review.avatarURL,
      createdAt:this.props.review.createdAt
    }

    this.readmore = this.readmore.bind(this);
  }

  readmore(){
    this.setState({
      hidden: true
    })
  }


  render() {

    return (
      <ReviewContainer>
        <Profile>
          <Image src={this.state.avatarURL}></Image>
          <Nameinfo>
            <h1>{this.state.firstName}</h1>
            <h1>{this.state.createdAt}</h1>
          </Nameinfo>
        </Profile>
        {this.state.hidden?
        <Comments>{this.state.comments}</Comments>
        : <Comments>{`${this.state.comments.slice(0,100)}...`}<Span onClick ={this.readmore}>read more</Span></Comments>
        }



      </ReviewContainer>
    )

  }
}

export default Review;


// const Review = ({ review }) => {
//   return (
//     <ReviewContainer>
//       <Profile>
//         <Image src={review.avatarURL}></Image>
//         <Nameinfo>
//           <h1>{review.firstName}</h1>
//           <h1>{review.createdAt}</h1>
//         </Nameinfo>
//       </Profile>
//       <Comments>{review.comments}</Comments>


//     </ReviewContainer>
//   )
// }