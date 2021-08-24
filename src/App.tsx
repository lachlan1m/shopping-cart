import Cart from './components/cart/Cart';
import ProductList from './components/products/ProductList';
import './App.css';
  
interface Product { 
  name: string;
  price: number; 
}  

function App() {

  const products: Product[] = [
    {
    name: "Sledgehammer",
    price: 125.75
    },
    {
    name: "Axe",
    price: 190.50
    },
    {
    name: "Bandsaw",
    price: 562.13
    },{
    name: "Chisel",
    price: 12.9
    },
    {
    name: "Hacksaw",
    price: 18.45
    }
    ]
    
  return (
    <div className="App">
      <body className="App-body">
        <ProductList products={products} />
        <Cart />
      </body>
    </div>
  );
}

export default App;
