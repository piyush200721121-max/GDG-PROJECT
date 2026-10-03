import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import './App.css';
import Product from './product';
import product1 from './images/product1.png';
import product2 from './images/product2.png';
import product3 from './images/product3.png';
import product4 from './images/product4.png';

function App() {
const [buttonClicked1, setButtonClicked1] = useState(false);
const [buttonClicked2, setButtonClicked2] = useState(false);
const [buttonClicked3, setButtonClicked3] = useState(false);
const [buttonClicked4, setButtonClicked4] = useState(false);

  useEffect(() => {
    function preventWheelScroll(event) {
      event.preventDefault();
    }

    window.addEventListener('wheel', preventWheelScroll, { passive: false });
    return () => window.removeEventListener('wheel', preventWheelScroll);
  }, []);

  function handleButtonClick1() {
    setButtonClicked1((clicked) => !clicked);
  }

  function handleButtonClick2() {
    setButtonClicked2((clicked) => !clicked);
  }

  function handleButtonClick3() {
    setButtonClicked3((clicked) => !clicked);
  }

  function handleButtonClick4() {
    setButtonClicked4((clicked) => !clicked);
  }



  return (
    <div className="App">
      <header className="App-Header">Interactive 3D Product Showcase</header>
      <div className="App-Body">
        <h1>Welcome to GDG Watch Marketplace</h1>
        <p>Explore our collection of 3D Watches and experience them in an interactive way.</p>
      </div>

      <div className="list1">
        <div className="product1">
          <div>
            <Product name="Digital Clock (Variant 1)" description="A simple clock with 3D design." price={19.99} />
            <div className="spline-container">
              <Spline scene="https://prod.spline.design/j1lJuj2CfwDztwj8/scene.splinecode" />
            </div>
            <div className="product-actions">
              {buttonClicked1 ? <button onClick={handleButtonClick1}>View Image</button>:<button className="product-detail" onClick={handleButtonClick1}>Product Detail</button>}
              <button className="buy">Buy Now</button>
            </div>
          </div>
          <div className="detail">
            {buttonClicked1 ? (
              <ul>
                <li>Product Name: Cuboidal Clock</li>
                <li>It has the color of Floweral Pink</li>
                <li>Has a Big Display</li>
                <li>Has a Touchscreen</li>
                <li>Have great functionality</li>
                <li>Recommended for all ages</li>
                <li>Rechargeable Battery</li>
              </ul>
            ) : <img className="img" src={product1} alt="Red digital clock on a bedside table" />}
          </div>
        </div>

        <div className="product2">
          <div>
          <Product name="Digital Clock (Variant 2)" description="A modern digital clock with 3D design." price={29.99} />
          <div className="spline-container">
            <Spline scene="https://prod.spline.design/PuXnuvdB0gVx44gk/scene.splinecode" />
          </div>
          <div className="product-actions">
            {buttonClicked2 ? <button onClick={handleButtonClick2}>View Image</button>:<button className="product-detail" onClick={handleButtonClick2}>Product Details</button>}
            <button className="buy">Buy Now</button>
          </div>
        </div>
        <div className="detail">
                       {buttonClicked2 ? (
              <ul>
                <li>Product Name: Slant Clock</li>
                <li>It has the color of Green Grass</li>
                <li>Has a Medium Sized Display</li>
                <li>Has a Touchscreen</li>
                <li>Have great functionality</li>
                <li>Recommended for all ages</li>
                <li>Changeable Battery</li>
                </ul>
            ) : <img className="img" src={product2} alt="Red digital clock on a bedside table" /> } 
        </div>  
        </div>
      </div>

      <div className="list2">
        <div className="product3">
          <div>
          <Product name="Smartwatch" description="A smartwatch with 3D design and interactive features." price={199.99} />
          <div className="spline-container">
            <Spline scene="https://prod.spline.design/KfBZKBAjNlcUuuiC/scene.splinecode" />
          </div>
          <div className="product-actions">
            {buttonClicked3 ? <button onClick={handleButtonClick3}>View Image</button>:<button className="product-detail" onClick={handleButtonClick3} >Product Detail</button>}
            <button className="buy">Buy Now</button>
          </div>
          </div>
          
          <div className="detail">
                                      {buttonClicked3 ? (
              <ul className="product1details">
                <li>Product Name: Black Wrist</li>
                <li>It has the Matt Black Color</li>
                <li>Has a Amoled Display</li>
                <li>Has a Touchscreen</li>
                <li>Have Great Functionalities</li>
                <li>Recommended for all ages</li>
                <li>Charger provided with product</li>
              </ul>
            ) : <img className="img" src={product3} alt="Red digital clock on a bedside table" />} 
          </div>
        </div>

        <div className="product4">
          <div>
          <Product name="Analog Watch" description="A simple analog watch with 3D design" price={499.99} />
          <div className="spline-container">
            <Spline scene="https://prod.spline.design/GfJ-MA518ATPENwt/scene.splinecode" />
          </div>
          <div className="product-actions">
            {buttonClicked4 ? <button onClick={handleButtonClick4}>View Image</button>:<button className="product-detail" onClick={handleButtonClick4}>Product Details</button>}
            <button className="buy">Buy Now</button>
          </div>
          </div>
          <div className="detail">
            {buttonClicked4 ? (
              <ul className="product1details">
                <li>Product Name: Analog Clock</li>
                <li>It has the color of Ocean Blue</li>
                <li>Has a Big Structure</li>
                <li>Precise Hour, Minute and Second Hands</li>
                <li>Comes with a Hook Slot</li>
                <li>Recommended for all ages</li>
                <li>Changeable Battery</li>
              </ul>
            ) : <img className="img" src={product4} alt="Red digital clock on a bedside table" />} 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
