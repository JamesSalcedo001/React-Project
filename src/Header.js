import {Link, NavLink} from "react-router-dom"

function Header({darkMode, darkToggle}) {

    function clickHandler(){
        darkToggle()
    }

    const buttonText = darkMode ? "Light Mode" : "Dark Mode"

    return (
        <header className="headerDiv">
            <nav>
                <Link to="/" style={{textDecoration:"none"}}>
                    <h1>StarBucks</h1>
                </Link>
                <div>
                    <NavLink exact to="/coffee" style={{textDecoration:"none"}}>All Coffee</NavLink>
                    <NavLink exact to="/coffee/new"style={{textDecoration:"none"}}>Custom Brew</NavLink>
                    <button onClick={clickHandler}>{buttonText}</button>
                </div>
            </nav>
        </header>
    )
}

export default Header;