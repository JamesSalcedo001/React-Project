function Card({coffee}) {
    const {name, type, recipe, image, likes} = coffee
    return (
        <li>
            <h4>{name}</h4>
            <img src={image} alt={name}/>
            <p>{type}</p>
            <p>{recipe}</p>
        </li>
    )
}

export default Card;