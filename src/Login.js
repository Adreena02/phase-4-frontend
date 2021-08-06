// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'
import React from 'react'
import "./Login.css"
import "./Header.css"
import "./Search.css"


function Login({userList, newUser, setChangeUser, changeUser, handleToggle, handleSearch}) {
    // let userList = users.map(user => <option key= {user.id}> {user.name}</option>)

    // function newUser(e) {
    //     let currentUser = users.find(user => user.name === e.target.value)
    //     setLoggedIn(currentUser)
    // }

    // function handleUser(){
    //     newUser()
    // }
    

    return (
        
        <div className="login">

            <button onClick={handleToggle} type="button" class="btn-three">Favorites</button>
            <select className="login-select" onChange={newUser} value={changeUser}>
               <option>Select Current User</option>
               {userList}
            </select>
            <input className="main-search" onChange={handleSearch} className="prompt" placeholder="Search for your favorite"/>
            <i className="search-icon" />
           <hr />
        </div>
    )
}
export default Login