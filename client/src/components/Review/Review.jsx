import React from 'react';
import styled from 'styled-components';


const ReviewContainer = styled.div`
#review & {
  margin-bottom:30px;
}

#reviewmodal-root & {
  margin-bottom:30px;
}
`;

const Profile = styled.div`
#review & {
  display:flex;
  margin-bottom:10px;
}

#reviewmodal-root & {
  display:flex;
  margin-bottom:10px;
}
`;

const Image = styled.img`
#review & {
  vertical-align:middle;
  width:6.0vmin;
  height:6.0vmin;
  border-radius:50%;
  margin-right: 5px;
}

#reviewmodal-root & {
  vertical-align:middle;
  width:6.0vmin;
  height:6.0vmin;
  border-radius:50%;
  margin-right: 5px;
}
`;

const Comments = styled.div`
#review & {
  font-size:1.4vmin;
}

#reviewmodal-root & {
  font-size:1.4vmin;
}

`;

const Nameinfo = styled.div`
#review & {
  & > h1{
    font-size:1.2vmin;
    font-weight:normal;
  }
}

#reviewmodal-root & {
  & > h1{
    font-size:1.2vmin;
    font-weight:normal;
  }
}
`;

const Span = styled.span`
#review & {
  font-weight:bold;
  text-decoration: underline;
  font-size:1.6vmin;

  &:hover{
    cursor:pointer;
  }
}

#reviewmodal-root & {
  font-weight:bold;
  text-decoration: underline;
  font-size:1.6vmin;

  &:hover{
    cursor:pointer;
  }
}
  `;

const textStyles ={
  fontWeight:'bold',
  fontSize:'1.4vmin'
}

class ReviewSection extends React.Component {
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
            <h1 style ={{color: `#909090`}}>{`${months[this.state.date.getMonth()]} ${this.state.date.getFullYear()}`}</h1>
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

export default ReviewSection;


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