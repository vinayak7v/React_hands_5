import React, { useState } from 'react'
import MyPureComponent from './MyPureComponent';

function Add() {
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
  return (
    <div>
        <h1 className='main'>Example of PureComponent</h1>
      <MyPureComponent count={count}/>
      <div className='center'>
      <button className='btn3' onClick={increment}>PureButton</button>
      </div>
    </div>
  )
}

export default Add  