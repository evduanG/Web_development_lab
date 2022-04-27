import logo from './logo.svg';
import './App.css';
import React ,{Component, useEffect,useState} from 'react';


const App = () => {

  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('https://fakestoreapi.com/products');

  const fetchProducts = () => {
    setLoading(true);
    fetch(url).then(res => res.json())
    .then(data => {
      console.log(data);
      sortToCategory(data);
      setData(data);
      setLoading(false);
    }).catch(err => console.log(err))
  }

  useEffect(() => {fetchProducts();}, []);

  const sortToCategory = (data) => {
    const categories = {};
    data.forEach(product => {
      if(!categories[product.category]) {
        categories[product.category] = [];
      }
      categories[product.category].push(product);
    });
    setCategory(categories);
    console.log(categories);
  }

    
 const setHeader = (headerTital  ="Products") => {
   return <header className="App-header">
     <div className='Line-bar'>
       {Object.keys(category).map(key => {
          return <a href='' className='Line-bar-link'><span>{key}</span></a>
       }
      )}
     </div>
     <div>
        <h1>{headerTital}</h1>  
     </div>
     </header>
  }

  const categoryBody = () => {
    return <div className="App-body">
      {Object.keys(category).map(categoryName => {
        return <section className="products">
          <div><h1 style={{color:'red'}}>{categoryName}</h1></div>
            {category[categoryName].map(product => {
              return <div className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.title}/>
                </div>
                <div className="product-info">
                  <h5>{product.title}</h5>
                   <p>{product.price} $</p></div>
                <div className="product-title">{product.title}</div>
                <div className="product-price">{product.price}</div>
              </div>
            })}
            <br/>
      </section>})}
    </div>
  }



  const setBody = (data) => {
    return <div className="App-body">
      <section className="products">
      {data.map(item => 
      <div className="product-card" key={item.id}>
        <div className="product-image">
          <img src={item.image} alt={item.title}/>
        </div>
        <div className="product-info">
          <h5>{item.title}</h5>
          <p>{item.price} $</p>
          </div>
        </div>)}
      </section>
    </div>
  }

  return (
    <div className="App">
      {setHeader()}
      {loading ?<div>loading...</div>:categoryBody()}
      <br/>
    </div>
  );
}



export default App;
