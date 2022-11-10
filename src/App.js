import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import Cartlist from "./components/Cartlist";
import 'bootstrap/dist/css/bootstrap.min.css';/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  var [cartState, setCartState] = useState([]);
  const [currentM, setCurrentM] = useState({ text: '',  price: '', key: '', num:1 });
  var bakeryItemDict ={}
  bakeryData.forEach((item) => {
    bakeryItemDict[item.name]=0;
  });


  const handleInput = (item) => {
        
    setCartState([...cartState, {text:item.name, price: item.price, num:1,key:Date.now()}]);
    console.log(bakeryItemDict)
  };
  
  return (
    <body>
      <div class="flex-col" className="App">
        <div class="d-flex">
          <main>
            <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
            {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
              <BakeryItem item={item} handleInput ={handleInput} />
              // replace with BakeryItem component
            ))}


          </main>
          <aside>
            <h2>Cart</h2>
            {/* TODO: render a list of items in the cart */
            <Cartlist m={cartState}/>}
          </aside>
        </div>
      </div>
    </body>
      
  );

}

export default App;
