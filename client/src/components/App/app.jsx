import React from 'react';
import axios from 'axios';

import Modal from '../Modal/Modal.jsx';
import Profile from '../Profile/Profile.jsx';
import AverageReview from '../AverageReview/AverageReview.jsx';
import ReviewBar from '../ReviewBar/ReviewBar.jsx';
import Reviews from '../Reviews/Reviews.jsx';


class App extends React.Component {
  constructor(props){
    super(props);

    this.requestedId = JSON.parse(window.location.href.split('/')[3]);

    this.state ={
      modalOpen:false,
      listingId : this.requestedId,
      reviews:[],
      average:null
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.getAverage = this.getAverage.bind(this);
  }

  componentDidMount(){

    axios.get(`http://localhost:3000/api/reviews/${this.state.listingId}`).then(res =>{

      this.setState({
        reviews: res.data
      },() =>{
        this.getAverage();
      })
    })
    .catch(err =>{
      console.log('could not retrieve reviews data')
    })
  };

  toggleModal(){
    this.setState(prevState =>({
      modalOpen: !prevState.modalOpen
    }))
  };

  getAverage (){
    axios.get(`http://localhost:3000/api/reviews/${this.state.listingId}?type=review`).then(res =>{
      this.setState({
        average : res.data
      })
    }).catch(err =>{
      console.log('could not retrieve average review score')
    })
  }

  render(){
    return(
      <div>
        {this.state.modalOpen ?
          <Modal>
            <Profile modalOpen = {this.state.modalOpen} toggleModal={this.toggleModal}/>
          </Modal>
          :null
        }
        <AverageReview average ={this.state.average} numbers ={this.state.reviews.length}></AverageReview>
        <ReviewBar reviews ={this.state.reviews}></ReviewBar>
        <Reviews reviews ={this.state.reviews}></Reviews>
        <button onClick={this.toggleModal}>Show all reviews</button>
      </div>
    )
  }
}

export default App;

