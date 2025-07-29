import React, { Component } from 'react'
import {Link} from'react-router-dom';
import'./css/Page2.css';

export default class Page2 
extends Component {
  render() {
    return (
      <div className='main1'>
        <div id='text2'><h1> I Love You Chinnu </h1>
        </div>
      <br></br>
      <Link to="/page1">go to Page1</Link>
      <br></br>
      <div className='link2'>
      <Link to="/">go to HomePage</Link>
      </div>
      </div>
    )
  }
}
