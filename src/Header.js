import {Link, NavLink} from "react-router-dom"
import {FaRegSun, FaRegMoon} from "react-icons/fa"

function Header({darkMode, darkToggle}) {

    function clickHandler(){
        darkToggle()
    }

    const buttonText = darkMode ? <FaRegSun id="sun"/> : <FaRegMoon id="moon"/>

    return (
        <header className="headerSection">
            <nav>
                <Link to="/" style={{textDecoration:"none"}}>
                    <h1 id="title">StarBucks</h1>
                </Link>
                <div id="nav">
                    <NavLink exact to="/coffee" style={{textDecoration:"none"}} id="button1">All Coffee</NavLink>
                    <NavLink exact to="/coffee/new"style={{textDecoration:"none"}} id="button2">Custom Brew</NavLink>
                    <button id="darkButton" onClick={clickHandler}>{buttonText}</button>
                </div>
            </nav>
        </header>
    )
}

export default Header;