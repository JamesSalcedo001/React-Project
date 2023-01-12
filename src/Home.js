import Clock from "./Clock"
import {useEffect, useState} from "react"
import Card from "./Card"

function Home({coffee, deleter, updater}) {
    const [newOrders, setNewOrder] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/products?_sort=id&_order=desc&_limit=6")
        .then((res) => res.json())
        .then((newOrd) => {
            setNewOrder(newOrd)
        })
    },[])


    return (
        <div className="homeDiv">
            <h1>HOMEPAGE</h1>
            <p>My Name is James Salcedo and I am an Aspiring Software Engineer! Welcome to My Site!</p>
            { "The Time is Now: "}<Clock/>

            <section>
                <h1>CURRENT ORDERS</h1>
                <ul>
                    {newOrders.map((coffeeObj) => (
                        <Card key={coffeeObj.id} coffee={coffeeObj} deleter={deleter} updater={updater}/>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default Home;