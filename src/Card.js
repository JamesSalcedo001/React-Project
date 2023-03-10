import {useState} from "react"

function Card({coffeeObj, deleter, updater }) {
    const {name, id, type, recipe, image, likes} = coffeeObj
    const [favs, setFavs] = useState(false)


    function removeCoffee(){
        fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE",
        })
        deleter(id)
    }



    function likePatch() {
        fetch(`http://localhost:3000/products/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                likes: ++coffeeObj.likes
            })
        })
        .then((res) => res.json())
        .then((coffeeObj) => updater(coffeeObj))
    }

    return (
        <li className="cardLi">
            <h4 id="drinkNames">{name}</h4>
            {favs ? (
                <button onClick={() => setFavs(false)} className="star favorite active">★</button>
            ) : (
                <button onClick={() => setFavs(true)} className="star favorite">☆</button>
            )}

            <figure id="img">
                <img className="image" src={image} alt={name}/>
            </figure>
            
            <section>
                <p id="cardText">{type}</p>
            </section>

            <div id="recipeDiv">
                <p id="recipeP">{recipe}</p>
            </div>

            <button id="likeButton" onClick={likePatch}>LIKES: {likes}</button>
            <button id="delete" onClick={removeCoffee}>REMOVE</button>
        </li>
    )
}

export default Card;