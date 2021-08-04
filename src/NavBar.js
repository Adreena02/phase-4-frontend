import React from 'react'
import Search from './Search'
import Login from './Login'
import Header from './Header'

function NavBar({handleSearch, setLoggedIn, users}) {
    return (
        <div>
           <Search handleSearch={handleSearch}/>
           <Login setLoggedIn={setLoggedIn} users={users} />
           <Header /> 
        </div>
    )
}

export default NavBar
