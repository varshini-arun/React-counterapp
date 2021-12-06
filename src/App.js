import './App.css';
import React,{useState} from 'react'
// import Button from './Button'

function App() {
  // rule - never change the state variable directly
  // const [] = useState()
  const [count, setCount] = useState(0)
   
  return (
    <div className="App">
     <header>
         <h1>COUNTER APP (STATE)</h1>
      </header>
     
      <h2>COUNT IS: {count}</h2>
          {/* ()=>( (condition)? true : false ) ) */}
      {/* <button onClick={()=>(setCount(count+1))}>+</button>
      <button onClick={()=>(setCount(count-1))}>-</button> */}
      <button onClick={()=>(setCount(0))}>Clear</button>
      {/* <button onClick={()=>(setCount(count+1))}>+</button> */}
      <button onClick={()=>( (count)? (setCount(count-1)) : (setCount(0) ) )}>-</button>
      <button onClick={()=>( (count<=14)? (setCount(count+1)) : "" )}>+</button>
      

    </div>
  );
}

export default App;
