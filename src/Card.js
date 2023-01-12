// import {useState} from "react"

function Card({coffee, deleter, updater}) {
    const {name, id, type, recipe, image, likes} = coffee


    function removeCoffee(){
        fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then(deleter(id))
    }



    function likePatch() {
        fetch(`http://localhost:3000/products/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                likes: ++coffee.likes
            })
        })
        .then((res) => res.json())
        .then((updatedCoffee) => updater(updatedCoffee))
    }

    return (
        <li className="cardLi">
            <h4>{name}</h4>

            <figure>
                <img className="image" src={image} alt={name}/>
            </figure>
            
            <section>
                <p>{type}</p>
            </section>

            <div>
                <p>{recipe}</p>
            </div>

            <button onClick={likePatch}>LIKES: {likes}</button>
            <button onClick={removeCoffee}>REMOVE</button>
        </li>
    )
}

export default Card;