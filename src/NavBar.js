import React from 'react'
// import Search from './Search'
import Login from './Login'
// import Header from './Header'

function NavBar({handleSearch, newUser, userList, handleToggle}) {
    return (
        <div>
             {/* <Header 
                  handleToggle={handleToggle}/>  */}
           <Login 
                // setLoggedIn={setLoggedIn} 
                // users={users} 
                handleSearch={handleSearch}
                newUser={newUser}
                userList={userList}
                handleToggle={handleToggle}
                />
                {/* unneeded components, but for future editing - handleSearch belongs to Search component and HandleToggle belongs to Header for Favorites Button */}
                {/* <Search 
                     /> */}
        </div>
    )
}

export default NavBar
