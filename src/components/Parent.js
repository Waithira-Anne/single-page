import React from "react";
import { Link, Outlet } from 'react-router-dom';



const Parent = () => {
    return (
        <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/one">Child One</Link>
                </li>
                <li>
                    <Link to="/two">Child Two</Link>
                </li>
                <li>
                    <Link to="/three">Last Child</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </div>
    );
}

export default Parent;