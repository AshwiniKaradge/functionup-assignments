import React,{useState, useEffect} from 'react';
import axios from 'axios';

function DogImg (){ 
    const[image,setImage] =useState('');
    
    

        const GetDogImg=async()=>{
            try{

            const response= await axios.get("https://dog.ceo/api/breeds/image/random")
            
         
            setImage(response.data.message)
            }
            catch(error){
                console.log(error)
            }

        };
        useEffect(() =>{
        GetDogImg();
    },[]);

    return(
        <div>
        <img src={image} alt="Dog"/>
        < button onClick={GetDogImg} >Get Random Dog Image</button>
        </div>

    );
}
export default DogImg;
