import logo from './logo.svg';
import './App.css';
import Product from "./ProductComponents";
import Products from "./products";
import Navbar from "./Navbar";

function App() {
  const ShopComponents = Products.map(item =><Product key={item.id} product={item}/>)
  return (
    <div className="App">
      <Navbar />
      <h2>We have the best products!</h2>
      <div className="main-content">
        {ShopComponents}
      </div>
      
    </div>
  );
}

export default App;
