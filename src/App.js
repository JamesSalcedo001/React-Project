import './App.css';
import Header from "./Header"
import {Switch, Route} from "react-router-dom"
import Form from "./Form"
import Home from "./Home"
import List from "./List"
import {useEffect, useState} from "react"



function App() {

  const [darkMode, setDarkMode] = useState(false)

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

  function updater(updatedCoffee) {
    const updatedCoffeeList = coffee.map((coffeeObj) => {
      if (coffeeObj.id === updatedCoffee.id) {
        return updatedCoffee
      } else {
        return coffeeObj;
      }
    })
    addNewCoffee(updatedCoffeeList)
  }

  function darkToggle(){
    setDarkMode((darkMode) => !darkMode)
  }


  return (
    <div className={darkMode ? "Dark" : "Light"}>
      <Header darkMode={darkMode} darkToggle={darkToggle}/>

      <Switch>
        <Route path="/coffee/new">
          <Form coffeeOrder={coffeeOrder} />
        </Route>

        <Route path="/coffee">
          <List coffee={coffee} deleter={deleter} updater={updater}/>
        </Route>

        <Route path="/">
          <Home coffee={coffee} deleter={deleter} updater={updater}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
