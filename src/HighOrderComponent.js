import React, { useState } from 'react'

function HighOrderComponent(OriginalComp) {

    const NewComp=()=>{
        const [count,setCount]=useState(0);


        const increment=()=>{
            setCount(count+1);
        }
        return <OriginalComp count={count} increment={increment}/>
    }

  return NewComp;
}

export default HighOrderComponent