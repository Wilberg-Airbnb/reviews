import React from 'react';
import {mount,shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProgressBar from './ProgressBar.jsx';
import {reviews} from '../sampleData.js';

describe('ProgressBar component',()=>{

  it('should recieve the type of review score as prop',()=>{
    const wrapper = mount(<ProgressBar name={'Cleanliness'} score={3.1}/>);

    expect(wrapper.props().name).toEqual('Cleanliness');
  })

  it('should receive the review type\'s average score',() =>{
    const wrapper = mount(<ProgressBar name={'Cleanliness'} score={3.1}/>);
    expect(wrapper.props().score).toEqual(3.1);
  })



})