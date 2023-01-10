import './App.css';
import Header from "./Header"
import {Switch, Route} from "react-router-dom"
import Form from "./Form"
import Home from "./Home"
import List from "./List"
import {useEffect} from "react"



function App() {

  useEffect(() => {
    fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then(console.log)
  },[])
  
  return (
    <div className="App">
      <Header/>

      <Switch>
        <Route path="/coffee/new">
          <Form/>
        </Route>

        <Route path="/coffee">
          <List/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
