import React from 'react';
import {mount,shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app.jsx';
import axios from 'axios';

configure({adapter:new Adapter()});

describe('App component',()=>{
  it('should get listingId as url parameter', async()=>{

    global.window = Object.create(window);
    const url = 'http://localhost:8080/15/';
    Object.defineProperty(window,'location',{
      value:{
        href:url,
        pathname: '/15/'
      }
    })

    var wrapper = shallow(<App/>);
    expect(wrapper.state().listingId).toEqual(15);
  })

  it('should call componentDidMount when it first renders', async(done) =>{

    const spy = spyOn(App.prototype,'componentDidMount');
    var wrapper = await shallow(<App/>);
    const wrapperInstance = await wrapper.instance();
    wrapperInstance.componentDidMount();

    expect(spy).toHaveBeenCalled();
    done()
  })

  it('should call axios request on componentDidMount to get the data', async(done) =>{
    const spy = spyOn(axios,'get');
    var wrapper = mount(<App/>);

    const instance = await wrapper.instance();
    expect(spy).toHaveBeenCalled

    done();
  })
})