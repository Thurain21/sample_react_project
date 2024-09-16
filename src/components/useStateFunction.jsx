import React from 'react';
import { useState } from 'react';
import './UseStateFunction.css';

function useStateFunction() {
    let [count,setCount] = useState(0);
  return (
    <div>
        <button onClick={()=> setCount(count++)}>+</button>
        <span>{count}</span>
        <button onClick={()=> setCount(count--)}>-</button>
    </div>
  )
}

export default useStateFunction;