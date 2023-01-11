function Card({coffee, deleter}) {
    const {name, id, type, recipe, image, likes} = coffee

    function removeCoffee(){
        fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then(deleter(id))
    }

    return (
        <li>
            <h4>{name}</h4>
            <img src={image} alt={name}/>
            <p>{type}</p>
            <p>{recipe}</p>
            <button>LIKES: {likes}</button>
            <button onClick={removeCoffee}>REMOVE</button>
        </li>
    )
}

export default Card;