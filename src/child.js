import React, { useContext } from 'react';
import CounterContext from './countercontext';


const Child = () => {

    let countervalue = useContext(CounterContext)
    return (
        <div>
            <h1>This Increment Done with Counter Context API</h1>
            <h1>This Is first child....</h1>

    <h2>Counter Value is:-{countervalue[0]}</h2>
    <button onClick={() =>{countervalue[1](++countervalue[0])}}>Context Increment</button>
        </div>
    )
}
export default Child;