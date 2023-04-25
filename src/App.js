import React from 'react';
import Card from './profile';
import './App.css';

const App=()=> {
  return (
    <div className="App">
  
<Card 
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHW3Vy1-oeLGeE7xoybQzImGHBOLp2zkekg&usqp=CAU"
          designation="UI/UX DESIGNER"
          name= "Neha Padhan"
          jobDescription="lorem ipsum sit amet,consectetur adipiscing elit."
      />

      <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ8ycrhd3biE0iE_uNgnvT9fEs4dFAk3gD3w&usqp=CAU"
          designation="UI/UX DESIGNER"
          name= "Piya Dev"
          jobDescription= "lorem ipsum sit amet,consectetur adipiscing elit. "
      />
      
      <Card
          image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL86nTC_4dT1NKXzmOzuAI4MGJCLW4t8s7Xg&usqp=CAU"
          designation="UI/UX DESIGNER"
          name="Smarath sharma"
          jobDescription= "lorem ipsum sit amet,consectetur adipiscing elit. "
      />
  

  </div>
  );
};
export default App;
