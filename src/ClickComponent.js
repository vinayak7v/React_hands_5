import React from 'react'
import HighOrderComponent from './HighOrderComponent'
function ClickComponent({count,increment}) {
  console.log("clickComponent",count);
  return (
    <div>
        <h1 className='text'>By Click Count:-{count}</h1>
        <div className='center'>
      <button className='btn2' onClick={increment}>Click</button>
      </div>
    </div>
  )
}

export default HighOrderComponent(ClickComponent)