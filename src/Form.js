function Form({coffeeOrder}) {



    function submit(e) {
        e.preventDefault()
    }

    return (
        <div>
            <section>
                <form onSubmit={submit}>
                    <h3>Mobile Order!</h3>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="what coffee?"/>

                    <label htmlFor="type">Type</label>
                    <input type="text" placeholder="blended, brewed, espresso, tea, iced coffee, other?"/>

                    <label htmlFor="recipe">Type</label>
                    <input type="text" placeholder="size, description, inclusions, exclusions?"/>

                    <label htmlFor="image">Type</label>
                    <input type="text" placeholder="what does it look like?"/>

                    <input type="submit" value="Order!"/>
                </form>
            </section>
        </div>
    )
}

export default Form;