import Clock from "./Clock"
import {useEffect, useState} from "react"
import Card from "./Card"

function Home({updater}) {
    const [recentOrders, setRecentOrder] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/products?_sort=id&_order=desc&_limit=9")
        .then((res) => res.json())
        .then((recentOrd) => {
            setRecentOrder(recentOrd)
        })
    },[])

    function deleter(id){
        const newCoffees = recentOrders.filter((coffeeObj) => coffeeObj.id !== id)
        setRecentOrder(newCoffees)
    }

    return (
        <div className="homeDiv">
            <h1 id="homeTitle">HOMEPAGE</h1>
            <p>My Name is James Salcedo and I am an Aspiring Software Engineer! Welcome to My Site!</p>
            { "The Time is Now: "}<Clock/>

            <section>
                <h1 id="homeCurrentOrders">CURRENT ORDERS</h1>
                <ul id="newOrders">
                    {recentOrders.map((coffeeObj) => (
                        <Card key={coffeeObj.id} coffeeObj={coffeeObj} deleter={deleter} updater={updater}/>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default Home;