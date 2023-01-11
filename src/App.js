import './App.css';
import Header from "./Header"
import {Switch, Route} from "react-router-dom"
import Form from "./Form"
import Home from "./Home"
import List from "./List"
import {useEffect, useState} from "react"



function App() {

  const [coffee, addNewCoffee] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((coffee) => addNewCoffee(coffee))
  },[])


  const coffeeOrder = (newCoffee) => {
    addNewCoffee((coffeeObj) => [...coffeeObj, newCoffee])
  }


  function deleter(deletedCoffee) {
    const newCoffeeList = coffee.filter((coffee) => coffee.id !== deletedCoffee.id)
    addNewCoffee(newCoffeeList)
  }


  return (
    <div className="App">
      <Header/>

      <Switch>
        <Route path="/coffee/new">
          <Form coffeeOrder={coffeeOrder} />
        </Route>

        <Route path="/coffee">
          <List coffee={coffee} deleter={deleter}/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
