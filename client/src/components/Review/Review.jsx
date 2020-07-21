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
  width:60px;
  height:60px;
  border-radius:50%;
  margin-right: 5px;
`;

const Comments = styled.div`
  font-size:14px;

`;

const Nameinfo = styled.div`
  & > h1{
    font-size:12px;
    font-weight:normal;
  }
`;

const Span = styled.span`
  font-weight:bold;
  text-decoration: underline;
  font-size:16px;

  &:hover{
    cursor:pointer;
  }
  `;

const textStyles ={
  fontWeight:'bold',
  fontSize:'14px'
}

class Review extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      hidden: false,
      comments:this.props.review.comments,
      firstname:this.props.review.firstName,
      avatarURL:this.props.review.avatarURL,
      createdAt:this.props.review.createdAt,
      date : new Date(this.props.review.createdAt)
    }

    this.readmore = this.readmore.bind(this);
  }

  readmore(){
    this.setState({
      hidden: true
    })
  }


  render() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
      <ReviewContainer>
        <Profile>
          <Image src={this.state.avatarURL}></Image>
          <Nameinfo>
            <h1 style={textStyles}>{this.state.firstname}</h1>
            <h1>{`${months[this.state.date.getMonth()]} ${this.state.date.getFullYear()}`}</h1>
          </Nameinfo>
        </Profile>
        {this.state.hidden?
        <Comments className="comments">{this.state.comments}</Comments>
        : <Comments className="comments">{`${this.state.comments.slice(0,100)}...`}<Span className="readmeClick"onClick ={this.readmore}>read more</Span></Comments>
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