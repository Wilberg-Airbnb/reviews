import React from 'react';
import {mount,shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Profile from './Profile.jsx';
import {reviews} from '../sampleData.js';

configure({adapter:new Adapter()});

describe('Profile component',() =>{
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<Profile className="modal-box" modalOpen={false} reviews={reviews}/>)
  })

  it('should render review components based on number of reviews in review prop',() =>{
    wrapper = mount(<Profile className="modal-box" modalOpen={false} reviews={reviews}/>)

    const reviewsComponents = wrapper.find('.review')
    expect(reviewsComponents.exists()).toBe(true);
    expect(reviewsComponents).toHaveLength(3);
  })
})