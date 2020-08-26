import React, { useState } from 'react';
import './App.css';
import CounterContext from './countercontext';
import Parent from './parent';


function App (){
  let counter = useState(1)
  return(
    <CounterContext.Provider value = {counter}>
    <div className= 'App'>
      <Parent />
    </div>
    </CounterContext.Provider>
  );
}

export default App;
