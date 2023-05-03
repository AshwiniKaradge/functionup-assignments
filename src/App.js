
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [image , setImage] = useState('https://images.pexels.com/photos/3177388/pexels-photo-3177388.jpeg?auto=compress&cs=tinysrgb&w=800')
  const url="http://localhost:3001/"
  const WAIT_TIME = 2000;
  useEffect(()=> {
    const id= setInterval(()=>{
      setImage
      .get(url)
      .then(res=>{
        setImage(res.data)
      })
      .catch(err=>{
        console.log(err);
      })
    }, WAIT_TIME);
    return ()=> clearInterval(id)
  }, [image]);
  async function getDogData () {
    
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((data)=> data.json())
    .then ((response)=> setImage(response.message))
    .catch((error) => console.log(error))  

  }

  async function getDog () {

    try{
          const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await response.json()
        setImage(data.message)
    }
    catch(error){
      console.log('i am from catch' ,error)
    }


  }
  return (
    <div className="App">
      <img 
        src={image}
        height={'200px'}
        width={'200px'}
        alt='dog image'
      />

    </div>
  )

}


export default App;
