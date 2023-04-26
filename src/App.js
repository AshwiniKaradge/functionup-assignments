
import React, {useState} from 'react';
import './App.css';

function App() {
  const [count,setCount]= useState(0);

    function increase(){
        const addCount= count+1;
        setCount(addCount);

    }

    function decrease(){
     const newCount= count-1;

     if(newCount < 0){
        return 0;
     }
      setCount(newCount);

  
    }

    return(
      <div>

      <h3>Count is: {count} </h3>
    
      <button onClick={increase}>increase</button>

      <button onClick={decrease}>decrease</button>
      
      </div>
    );
}

export default App;
