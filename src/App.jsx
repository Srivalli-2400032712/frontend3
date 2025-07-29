import { useState } from 'react'
import './App.css'
import {Link} from'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Welcome to Frontend class in KLU</h1>
      <h2>Today's topic is Introduction to React</h2>
      <h3>Today's date is 29.07.25</h3>
      <h4>2400032712-SRIVALLI</h4>
      <Link to="/page1">go to Page1</Link>
      <br></br>
      <Link to="/page2">go to Page2</Link>
      <br></br>
      <Link to="/page3">go to Page3</Link>
    </>
  )
}

export default App


