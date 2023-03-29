import Loader from "components/Loader";
import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./SharedLayout.css";

const SharedLayout = () => {
    return (
        <div className="Container">
            <header className="Header">
                <nav>
                    <ul className="Main-nav">
                        <li className="Nav-item">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="Nav-item">
                            <NavLink to="/movies">Movies</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Suspense fallback={<div><Loader /></div>}>
                <Outlet />
            </Suspense>            
        </div>
    )
}

export default SharedLayout;