import {Link, NavLink} from "react-router-dom"
import {FaRegSun, FaRegMoon} from "react-icons/fa"

function Header({darkMode, darkToggle}) {

    function clickHandler(){
        darkToggle()
    }

    const buttonText = darkMode ? <FaRegSun/> : <FaRegMoon/>

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