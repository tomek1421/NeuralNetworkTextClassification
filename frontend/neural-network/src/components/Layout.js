import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
 
export function Layout() {
    
    return (
        <div>
            <header className="">
                <nav>
                    <ul className="navbar">
                        <li><NavLink to="/" >Home</NavLink></li>
                        <li><NavLink to="/diabetes" >Diabetes</NavLink></li>
                        <li><NavLink to="/model" >Model</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}