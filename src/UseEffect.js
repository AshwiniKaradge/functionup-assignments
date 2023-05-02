import React, {useState,useEffect,useRef} from 'react';
import './App.css';

function UseEffect() {
  const [imageUrl,setImageUrl]=useState('');
  const imageRef=useRef(null);
  const imageUrls=['https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?w=1060&t=st=1683003503~exp=1683004103~hmac=46a0678db3cf8a29267d33e62fd59484d12c76aa8b7e271e7aefbc22cdfed63d' ,'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg' , 'https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?w=1060&t=st=1683003658~exp=1683004258~hmac=fcb3f3c13239cd8b9f20dc0d1dc56e1e7ae5512794fd3831b6523bf2dc261b59' , 'https://img.freepik.com/premium-photo/waterfall-deep-forest-mountain_42764-36.jpg?size=626&ext=jpg&ga=GA1.2.1834186658.1683003499&semt=robertav1_2_sidr'];
  useEffect(()=>{
    setImageUrl(imageUrls[0]);
  },[]);
  const changeImage =()=>{
    const currentImageUrl=imageRef.current.src;
    const currentIndex=imageUrls.indexOf(currentImageUrl);
    const nextIndex =(currentIndex + 1) % imageUrls.length;
    setImageUrl(imageUrls[nextIndex]);
  }
  return (
    <div>
      
        <img src={imageUrl} alt="example" width="500px" height="500px" ref={imageRef} />
        <button onClick={changeImage} style= {{color: "red"}}>Change Image</button>
    </div>
  );
}

export default UseEffect;

