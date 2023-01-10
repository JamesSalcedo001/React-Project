import { useState} from "react"
import {useHistory} from "react-router-dom"

function Form({coffeeOrder}) {

    const history = useHistory()
    console.log(history)

    const [formData, setFormData] = useState({
        name: "",
        type: "",
        recipe: "",
        image: "",
    })


    function submit(e) {
        e.preventDefault()
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({...formData, likes: 0}),
        }
        fetch("http://localhost:3000/products", configObj)
        .then((res) => res.json())
        .then((coffee) => {
            coffeeOrder(coffee)
            setFormData({
                name: "",
                type: "",
                recipe: "",
                image: "",
            })
            history.push("/coffee")
        })
    }



    return (
        <div>
            <section>
                <form onSubmit={submit}>
                    <h3>Mobile Order!</h3>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={formData.name} placeholder="what coffee?"/>

                    <label htmlFor="type">Type</label>
                    <input type="text" value={formData.type} placeholder="blended, brewed, espresso, tea, iced coffee, other?"/>

                    <label htmlFor="recipe">Type</label>
                    <input type="text" value={formData.recipe} placeholder="size, description, inclusions, exclusions?"/>

                    <label htmlFor="image">Type</label>
                    <input type="text" value={formData.image} placeholder="what does it look like?"/>

                    <input type="submit" value="Order!"/>
                </form>
            </section>
        </div>
    )
}

export default Form;