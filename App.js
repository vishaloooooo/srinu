import React from 'react';
import './App.css';

class App extends React .Component{

state = {
  products: [
  {
    "id": "1",
    "title": "Nike Shoes",
    "src":[
      
       "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
       "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
      " https://www.upsieutoc.com/images/2020/06/27/img4.jpg"
    ],
    "description": "UI/Ux srinu",
    "content": "https://github.com/facebook/create-react-app/tree/main/.github",
    "price":  23,
    "colors":["red", "black", "crimson","blue" ],
    "count": 1
  }

  ]
};


  render(){
const {products} = this.state;

return(
<div  className='app'>
 
 {
  products.map(item =>(
    <div className='details'key={item._id}>
     <div className='big-img'>
      <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/z/i/5/6-442-blk-gld-40-bruton-black-original-imag4q6ntfwkfzna-bb.jpeg?q=70" alt=""/>
      </div> 
      <div className='box'>
        <div className='row'>
        <h2>{item.title}</h2>
        <span>{item.price}</span>

        </div>
        <div className='colors'>
          {
            item.colors.map(color =>(
            <button style={{background: color}} ></button>
            ))
          }

     </div>  
     <p>{item.description}</p> 
     <p>{item.content}</p>  
     <div className='thumb'>
    
    <img src=' https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/b/u/v/8-express-10-8-asian-light-grey-original-imaghzf6uypzqudf.jpeg?q=70'alt=''/>
    <img src='https://rukminim1.flixcart.com/image/832/832/l4zxn680/shoe/o/q/k/10-434-gry-bruton-grey-original-imagfrn66sv958wq.jpeg?q=70'alt=''/>
    <img src=' https://rukminim1.flixcart.com/image/832/832/l432ikw0/shoe/s/s/o/8-wind-04cnavy-asian-navy-blue-original-imagf23kcgwc6gzg.jpeg?q=70'alt=''

   
    />

      </div>
      <button className='cart'>Add to cart</button>
   </div>
    </div>
  ))
 }
</div>
)
  }
}
export default App;
