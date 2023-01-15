import Card from "./Card"
import {useState, useEffect} from "react"

function List({coffee, deleter, updater}) {
    const [coffees, setCoffees] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((coffees) => setCoffees(coffees))
    },[])

    function deleter(id){
        const newCoffees = coffees.filter((coffee) => coffee.id !== id)
        setCoffees(newCoffees)
    }

    const coffeeMap = coffees.map((coffee) => {
        return (
            <Card key={coffee.id} coffee={coffee} deleter={deleter} updater={updater} />
        )
    })

    return (
        <div className="listDiv">
            <ul className="cards">{coffeeMap}</ul>
        </div>
    )
}

export default List;

