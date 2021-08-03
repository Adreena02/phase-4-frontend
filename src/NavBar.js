import React from 'react'
import Search from './Search'
import Login from './Login'
import Header from './Header'

function NavBar({handleToggle, handleSearch}) {
    return (
        <div>
           <Search handleSearch={handleSearch}/>
           <Login handleToggle={handleToggle} />
           <Header /> 
        </div>
    )
}

export default NavBar
