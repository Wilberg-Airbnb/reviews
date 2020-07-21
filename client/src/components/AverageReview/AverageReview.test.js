import React from 'react';
import {mount,shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AverageReview, {Star} from './AverageReview.jsx';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'styled-components'



configure({adapter:new Adapter()});

// const Star = styled.div`
//   background: #FF385C;
//   clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
//   display: inline-block;
//   height: ${({big})=> big? '30px' : '15px'};
//   width: ${({big})=> big? '30px' : '15px'};
//   margin-right:4px;
// }
// `;


describe('AverageReview component',()=>{
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<AverageReview average={3.02} numbers={121}/>)
  })

  it('should show the average review score that is rounded to two decimal points',()=>{
    let reviewScore = wrapper.find('.ReviewScore');
    expect(reviewScore.text().split(' ')[0]).toEqual('3.02')
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
