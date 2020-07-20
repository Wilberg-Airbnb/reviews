import React from 'react';
import {mount,shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReviewBar from './ReviewBar.jsx';
import {reviews} from '../sampleData.js';

configure({adapter:new Adapter()});

describe('ReviewBar component',() =>{

  it('should render 6 types of review components',() =>{
    const wrapper = shallow(<ReviewBar reviews ={reviews}/>)

    const reviewContainer = wrapper.find('.progressbar');
    expect(reviewContainer).toHaveLength(6);


  })
})