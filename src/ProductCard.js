import React from 'react'
const ProductCard=({ProductId, ProductPic,ProductName,Brand,ProductDescription,Price,Rating})=>{
    const productClick=()=>{
    alert("Product of "+Brand+" is "+ProductId+" which is "+ProductName+" has of price "+Price+" is added in the cart, please proceed to pay!" );
   
};


return(
    <div className="card">
      <img src={ProductPic}  height='100px'   weight= '100px' />
      <h1>{ProductId}</h1>
      <h1>{ProductName}</h1>

      <h2>{Brand}</h2>
      <h3>{Price}</h3>
      <p>{ProductDescription}</p>
      <p> {Rating}</p>
      <div className='button'>
      <button onClick={productClick} style={{backgroundColor:"black",color:"white"}}>Add to cart</button>
      </div>
    </div>
   );

};
export default ProductCard;
