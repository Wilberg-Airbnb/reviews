import React from 'react';
import axios from 'axios';
import styled,{keyframes} from 'styled-components';
import {slideInUp} from 'react-animations';
import {Slide} from 'react-awesome-reveal';

import Modal from '../Modal/Modal.jsx';
import Profile from '../Profile/Profile.jsx';
import AverageReview from '../AverageReview/AverageReview.jsx';
import ReviewBar from '../ReviewBar/ReviewBar.jsx';
import Reviews from '../Reviews/Reviews.jsx';
import $ from 'jquery';

import {CSSTransition} from 'react-transition-group';

const Appcontainer = styled.div`
      #review & {
        width:100%;
      }`;
const ReviewModalButton = styled.button`
#review & {
  padding:15px 25px;
  border-radius: 10px;
  border-style:solid;
  background-color:white;
  font-weight:bold;

  &:hover{
    filter:brightness(85%);
    cursor:pointer;
  }

  font-size:1.6vmin

}`;


const ModalWithTransitionStyles =styled(Modal)`
#review & {
  animation:2s ${keyframes `${slideInUp}`} 1000ms
}`;


class App extends React.Component {
  constructor(props){
    super(props);
    // console.log(window.location.pathname.slice(1,-1))
    this.requestedId = JSON.parse(window.location.pathname.split('/')[window.location.pathname.split('/').length-2]);

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

  shouldComponentUpdate(nextProps,nextState){
    return true;
  }

  componentDidMount(){
    axios.get(`http://52.14.214.44:8080/api/reviews/${this.state.listingId}`).then(res =>{
      this.setState({
        reviews: res.data
      },() =>{
        this.getAverage();
      })
    })
    .catch(err =>{
	console.log(err);
      console.log('could not retrieve reviews data')
    })
  };

  toggleModal(){
    console.log('clicked');
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
    axios.get(`http://52.14.214.44:8080/api/reviews/${this.state.listingId}?type=review`).then(res =>{
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
          <Modal open={this.state.modalOpen} onClose={this.state.toggleModal} >
            <Profile className="modal-box" modalOpen = {this.state.modalOpen} toggleModal={this.toggleModal} reviews = {this.state.reviews} average ={this.state.average} numbers ={this.state.reviews.length}/>
          </Modal>
          :null
        }
        <AverageReview average ={this.state.average} numbers ={this.state.reviews.length}></AverageReview>
        <ReviewBar reviews ={this.state.reviews} reviewmodal ={false}></ReviewBar>
        <Reviews reviews ={this.state.reviews}></Reviews>
        <ReviewModalButton className="ReviewmodalButton" onClick={this.toggleModal}>{`Show all ${this.state.reviews.length} reviews`}</ReviewModalButton>

        </Appcontainer>

    )
  }
}

export default App;
