import React from 'react';
import {mount,shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const puppeteer = require('puppeteer');


import axios from 'axios';

import App from './app.jsx';
import Modal from '../Modal/Modal.jsx';
import Profile from '../Profile/Profile.jsx';

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

  it('should open modal when button is clicked',()=>{
    const wrapper = shallow(<App/>)
    expect(wrapper.state('modalOpen')).toBe(false);

    wrapper.find('.modalButton').simulate('click');
    expect(wrapper.state('modalOpen')).toBe(true);
  });

  it('Can open and close modal', async () => {
    let browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      slowMo: 250
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 900
      },
      userAgent: ''
    });

    async function autoScroll(page){
      await page.evaluate(async () => {
          await new Promise((resolve, reject) => {
              var totalHeight = 0;
              var distance = 100;
              var timer = setInterval(() => {
                  var scrollHeight = document.body.scrollHeight;
                  window.scrollBy(0, distance);
                  totalHeight += distance;

                  if(totalHeight >= scrollHeight){
                      clearInterval(timer);
                      resolve();
                  }
              }, 500);
          });
      });
    }

    await page.goto('http://localhost:8080/12');
    await page.waitForSelector('.modalButton');
    await page.click("#review > div > button");
    await autoScroll(page);
    await page.click('#closebox');
    browser.close();
  }, 9000000);

  it('Can click readmore to see full comment', async () => {
    let browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      slowMo: 250
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 900
      },
      userAgent: ''
    });

    await page.goto('http://localhost:8080/12');

    await page.click("#review > div > div.sc-fznxsB.cUWXFh > div:nth-child(1) > div.sc-AxhUy.fxWvvr.comments > span");

    browser.close();
  }, 9000000);


})