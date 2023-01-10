import Card from "./Card"

function List({coffee}) {

    const coffeeMap = coffee.map((coffee) => {
        return (
            <Card key={coffee.id} coffee={coffee}/>
        )
    })

    return (
        <div>
            <ul>{coffeeMap}</ul>
        </div>
    )
}

export default List;

