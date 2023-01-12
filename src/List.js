import Card from "./Card"

function List({coffee, deleter, updater}) {

    const coffeeMap = coffee.map((coffee) => {
        return (
            <Card key={coffee.id} coffee={coffee} deleter={deleter} updater={updater}/>
        )
    })

    return (
        <div>
            <ul>{coffeeMap}</ul>
        </div>
    )
}

export default List;

