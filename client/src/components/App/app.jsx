import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Modal from '../Modal/Modal.jsx';
import Profile from '../Profile/Profile.jsx';
import AverageReview from '../AverageReview/AverageReview.jsx';
import ReviewBar from '../ReviewBar/ReviewBar.jsx';
import Reviews from '../Reviews/Reviews.jsx';
import $ from 'jquery';

const Appcontainer = styled.div`
      margin: 7% 20% 0%
    `;

const Button = styled.button`
  padding:15px 25px;
  border-radius: 10px;
  border-style:solid;
  background-color:white;
  font-weight:bold;

  &:hover{
    filter:brightness(85%);
    cursor:pointer;
  }

`;

class App extends React.Component {
  constructor(props){
    super(props);
    // console.log(window.location.pathname.slice(1,-1))
    this.requestedId = JSON.parse(window.location.pathname.slice(1,-1));

    this.state ={
      modalOpen:false,
      listingId : this.requestedId,
      reviews:[],
      average:null
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.getAverage = this.getAverage.bind(this);
    this.handleOutsideClick=this.handleOutsideClick.bind(this);
  }

  componentDidMount(){

    axios.get(`http://localhost:8080/api/reviews/${this.state.listingId}`).then(res =>{

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
    console.log('clicked');
    // this.setState(prevState =>({
    //   modalOpen: !prevState.modalOpen
    // }),()=>{
    //   console.log(this.state.modalOpen);
    // })

    if (!this.state.modalOpen) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
  };

  handleOutsideClick(e){

    if (!this.node.contains(e.target) && e.target.title==="insidemodal") this.toggleModal();
  }

  getAverage (){
    axios.get(`http://localhost:8080/api/reviews/${this.state.listingId}?type=review`).then(res =>{
      this.setState({
        average : res.data
      })
    }).catch(err =>{
      console.log('could not retrieve average review score')
    })
  }

  render(){
    return(

        <Appcontainer ref={node => {
          this.node = node;
        }}>
        {this.state.modalOpen ?
          <Modal >
            <Profile modalOpen = {this.state.modalOpen} toggleModal={this.toggleModal} reviews = {this.state.reviews} average ={this.state.average} numbers ={this.state.reviews.length}/>
          </Modal>
          :null
        }
        <AverageReview average ={this.state.average} numbers ={this.state.reviews.length}></AverageReview>
        <ReviewBar reviews ={this.state.reviews} reviewmodal ={false}></ReviewBar>
        <Reviews reviews ={this.state.reviews}></Reviews>
        <Button onClick={this.toggleModal}>{`Show all ${this.state.reviews.length} reviews`}</Button>

        </Appcontainer>

    )
  }
}

export default App;

