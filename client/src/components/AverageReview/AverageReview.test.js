import React from 'react';
import {mount,shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AverageReview, {AirbnbStar} from './AverageReview.jsx';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'styled-components'



configure({adapter:new Adapter()});

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});


describe('AverageReview component',()=>{
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<AverageReview average={3.02} numbers={121}/>)
  })

  it('should show the average review score that is rounded to two decimal points',()=>{
    let reviewScore = wrapper.find('.ReviewScore');
    expect(reviewScore.text().split(' ')[0]).toEqual('3.02')
    expect(Number(reviewScore.text().split(' ')[0])).toBeWithinRange(1,5);
  })

  it('should receive total number of reviews as props named as numbers',()=>{
    wrapper = mount(<AverageReview average={3.02} numbers={121}/>)
    expect(wrapper.props().numbers).toEqual(121);
  })

  it('should render bigger star when it receives prop named big',()=>{
    wrapper = mount(<AverageReview average={3.02} numbers={121} big={true}/>)
    expect(wrapper.props().big).toBe(true);
  })

})
