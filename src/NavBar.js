import React from 'react'
import Search from './Search'
import Login from './Login'
import Header from './Header'

function NavBar({handleSearch, newUser, userList, handleToggle}) {
    return (
        <div>
           {/* <Search 
                handleSearch={handleSearch}/> */}
           <Login 
                // setLoggedIn={setLoggedIn} 
                // users={users}
                handleSearch={handleSearch}
                handleToggle = {handleToggle}
                newUser={newUser}
                userList={userList}
                />
           {/* <Header 
                handleToggle={handleToggle}/>  */}
        </div>
    )
}

export default NavBar
