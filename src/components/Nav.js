import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="Nav">
            <h1>The Stock App</h1>
            <NavLink className='Nav_Link' to='/products'>Products</NavLink>
            <NavLink className='Nav_Link' to='/stock'>Stock</NavLink>
            <NavLink className='Nav_Link' to='/stock/add'>Add Stock</NavLink>
        </div>
    )
};
 