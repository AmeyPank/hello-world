import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let obj = {color:"tomato", textAlign:"center"}
const Hello = ()=>{
  let a = 10;
  let b = 5;
return(
  <div className='heading'>
  <h1 style={obj}> Hello world</h1>
  <p>{a+b}</p>
  </div>
)
}
ReactDOM.render(<Hello />,document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
