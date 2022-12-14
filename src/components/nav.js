 import { Outlet, Link } from "react-router-dom";

const Nav = () => {
    
    return <>
    <nav>
    <ul>
        <li>
            <Link to="/" >Home</Link>
        </li>
        <li>
            <Link to="/about" >About</Link>
        </li>
        <li>
            <Link to="/products" >Products</Link>
        </li>
    </ul>
    </nav>
    </>
}

export default Nav;