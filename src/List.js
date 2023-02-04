import Card from "./Card"
import {useState, useEffect} from "react"

function List({ updater, deleter}) {
    const [coffees, setCoffees] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((coffeeObj) => setCoffees(coffeeObj))
    },[])

    function deleter(id){
        const coffeeRemoved = coffees.filter((coffeeObj) => coffeeObj.id !== id)
        setCoffees(coffeeRemoved)
    }

    const coffeeMap = coffees.map((coffeeObj) => {
        return (
            <Card key={coffeeObj.id} coffeeObj={coffeeObj} deleter={deleter} updater={updater} />
        )
    })

    return (
        <div className="listDiv">
            <ul className="cards">{coffeeMap}</ul>
        </div>
    )
}

export default List;

