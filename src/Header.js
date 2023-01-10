import {Link, NavLink} from "react-router-dom"

function Header() {
    return (
        <header>
            <nav>
                <Link to="/" style={{textDecoration:"none"}}>
                    <h1>StarBucks</h1>
                </Link>
                <div>
                    <NavLink exact to="/coffee" style={{textDecoration:"none"}}>All Coffee</NavLink>
                    <NavLink exact to="/coffee/new"style={{textDecoration:"none"}}>Custom Brew</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header;