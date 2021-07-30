import React from 'react'
import Search from './Search'
import Login from './Login'
import Header from './Header'

function NavBar() {
    return (
        <div>
           <Search />
           <Login />
           <Header /> 
        </div>
    )
}

export default NavBar
