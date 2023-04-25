import logo from './logo.svg';
import './App.css';

import ProductCard from './ProductCard'

const App=() => {
  return (
    <div className="App"> 
    <ProductCard 
          ProductId= "1"
          ProductPic="https://cdn1.smartprix.com/rx-iz8tTENbj-w1200-h1200/z8tTENbj.jpg"
          ProductName= "Watch"
          Brand= "Apple"
          ProductDiscription= "Apple Watch Series 7 GPS 41 mm Price in India 2023, Full Specs & Review | Smartprix"
          Price= "$20"
          Rating="5"

          
      />

      <ProductCard
          ProductId= "2"
          ProductPic="https://m.media-amazon.com/images/I/61utX8kBDlL._UL1100_.jpg"
          ProductName= "Shoes"
          Brand= "ASAIN Shoes"
          ProductDiscription= "ASIAN Men's Wonder-13 Sports Running Shoes"
          Price= "$7"
          Rating= "4.5"

        
      />
      
      <ProductCard
          ProductId= "3"
          ProductPic= "https://m.media-amazon.com/images/I/61kWB+uzR2L._SX522_.jpg"
          ProductName= "Headset"
          Brand= "BOAT"
          ProductDiscription= "boAt Rockerz 370 On Ear Bluetooth Headphones with Upto 12 Hours"
          Price= "$15"
          Rating="5"

      
      />
      <ProductCard
          ProductId= "4"
          ProductPic= "https://rukminim1.flixcart.com/image/832/832/xif0q/kids-t-shirt/k/d/2/-original-imaggdq5ur7t4jss.jpeg?q=70"
          ProductName= "T-Shit"
          Brand="PUMA"
          ProductDiscription= "Girls Solid Pure Cotton T Shirt  (Purple, Pack of 1)"
          Price= "$12"
          Rating="4.8"

      
      />
      <ProductCard
          ProductId= "5"
          ProductPic= "https://m.media-amazon.com/images/I/61aflcZgumL._SX679_.jpg"
          ProductName= "Pendrive"
          Brand= "HP"
          ProductDiscription= "HP v236w 32GB USB 2.0 Pen Drive, Grey"
          Price="$6"
          Rating="4.5"

          
      />
  
  
  

      </div>
  
    
   
  );
}

export default App;
