import React from 'react';
import {mount,shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import axios from 'axios';

import App from './app.jsx';
import Modal from '../Modal/Modal.jsx';

configure({adapter:new Adapter()});

describe('App component',()=>{


  it('should get listingId as url parameter', async()=>{

    global.window = Object.create(window);
    const url = 'http://localhost:8080/15';
    Object.defineProperty(window,'location',{
      value:{
        href:url,
        pathname: '/15'
      }
    })

    var wrapper = shallow(<App/>);
    expect(JSON.parse(wrapper.state().listingId)).toEqual(15);
  })

  it('should call componentDidMount when it first renders', async(done) =>{

    const spy = spyOn(App.prototype,'componentDidMount');
    var wrapper = await shallow(<App/>);
    const wrapperInstance = await wrapper.instance();
    wrapperInstance.componentDidMount();

    expect(spy).toHaveBeenCalled();
    done()
  })

  it('should open modal when button is clicked',()=>{
    const wrapper = shallow(<App/>)
    expect(wrapper.state('modalOpen')).toBe(false);

    wrapper.find('.modalButton').simulate('click');
    expect(wrapper.state('modalOpen')).toBe(true);
  })


})