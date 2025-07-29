import React, { Component } from 'react'
import {Link} from'react-router-dom';
import'./css/Page2.css';

export default class Page1 extends Component {
  render() {
    return (
      <div className='main2'>
      <br></br>
        <div id='text2'>
      <h1> India is my country</h1>
      </div>
      <Link to="/page2">go to Page2</Link>
      <br></br>
      <div className='link1'>
      <Link to="/">go to HomePage</Link>
      </div>
      </div>
    )
  }
}

