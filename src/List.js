import Card from "./Card"

function List({coffee, deleter}) {

    const coffeeMap = coffee.map((coffee) => {
        return (
            <Card key={coffee.id} coffee={coffee} deleter={deleter}/>
        )
    })

    return (
        <div>
            <ul>{coffeeMap}</ul>
        </div>
    )
}

export default List;

