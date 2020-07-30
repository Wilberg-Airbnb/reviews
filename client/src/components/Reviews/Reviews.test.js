import React from 'react';
import {mount,shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from './Reviews.jsx';
import {reviews} from '../sampleData.js';

configure({adapter:new Adapter()});

describe('Reviews component',() =>{

  it('should render only up to 6 reviews on the page',() =>{
    const wrapper = shallow(<Reviews reviews = {reviews}/>)

    const reviewContainer = wrapper.find('.reviewsection');
    expect(reviewContainer.length).toBeLessThan(7);


  })
})