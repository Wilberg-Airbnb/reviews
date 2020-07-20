import React from 'react';
import {mount,shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Review from './Review.jsx';
import {reviews} from '../sampleData.js';

configure({adapter:new Adapter()});

const review = {"listingId":0,"firstName":"Madisen","lastName":"Wiegand","avatarURL":"https://s3.amazonaws.com/uifaces/faces/twitter/ivanfilipovbg/128.jpg","comments":"Maxime adipisci ea nisi voluptatem quaerat dignissimos ut quos. Enim sed enim nostrum delectus iste. Nisi et quia. Iure ut rerum. Dolorum nostrum aliquid est animi est necessitatibus eveniet vitae. Distinctio ipsa adipisci exercitationem deserunt illo.","createdAt":"2015-05-08T07:09:44.943Z","cleanliness":5,"accuracy":2,"communication":3,"location":3,"checkIn":4,"value":5}

describe('Review component',()=>{
  let wrapper;

  it('should render comments with read more at the end if the length of commnents is greater than 100',() =>{

    wrapper = shallow(<Review review = {review}/>).dive();
    var commentLength = review.comments.length;

    var comments = wrapper.find('.comments')

    expect(comments.text().length).toBeLessThan(commentLength);


  })

  it('should have read me that can be clicked to fully expand to show the comment',async () =>{

    wrapper = shallow(<Review review = {review}/>);
    expect(wrapper.state().hidden).toBe(false);
    var comments = wrapper.find('.comments')
    wrapper.find('.readmeClick').simulate('click');
    expect(wrapper.state().hidden).toBe(true);


  })
})