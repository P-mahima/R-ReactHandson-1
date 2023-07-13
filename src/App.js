
import { useState } from 'react';
import './App.css';
import Class from './Handson1/Class';
import Function from './Handson1/Function';

function App() {
  const [functionState, setFState] = useState(false)
  const [classState, setCState] = useState(false)
  return (
    <div className="App">
      <h1 className='title'>Styling Using Class And Function Component</h1>

      <div className='flex'>
      <button className='btn1' onClick={()=> setFState(!functionState)} >TO See Styling in class Component</button>
      <button className='btn1' onClick={()=> setCState(!classState)}>TO See Styling in function Component</button>
      </div>


      <div className='flex'>
      {functionState ? <Class/> : " "} 
      {/* {functionState && <Class/>} */}
      {classState ? <Function/> : " "}

      </div>
   
    </div>
  );
}

export default App;
