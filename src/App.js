import './App.css';
import Header from "./Header"
import {Switch, Route} from "react-router-dom"
import Form from "./Form"
import Home from "./Home"
import List from "./List"
import {useEffect, useState} from "react"



function App() {

  const [darkMode, setDarkMode] = useState(false)

  const [coffee, setCoffee] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((coffeeObj) => setCoffee(coffeeObj))
  },[])

  const addCoffee = (newCoffee) => {
    setCoffee((coffeeArr) => [...coffeeArr, newCoffee])
  }

  function updater(targetCoffee) {
    const updatedCoffeeList = coffee.map((coffeeObj) => {
      if (coffeeObj.id === targetCoffee.id) {
        return targetCoffee
      } else {
        return coffeeObj;
      }
    })
    setCoffee(updatedCoffeeList)
  }


  function darkToggle(){
    setDarkMode((darkMode) => !darkMode)
  }


  return (
    <div className={darkMode ? "Dark" : "Light"}>
      <Header darkMode={darkMode} darkToggle={darkToggle}/>

      <Switch>
        <Route path="/coffee/new">
          <Form addCoffee={addCoffee} />
        </Route>

        <Route path="/coffee">
          <List updater={updater}/>
        </Route>

        <Route path="/">
          <Home updater={updater}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
