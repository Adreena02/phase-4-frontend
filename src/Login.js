// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'
import React from 'react'
import "./Login.css"
import './Header.css'
import './Search.css'


function Login({userList, newUser, changeUser, abcUser, handleToggle, handleSearch}) {
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
            <img className = "icon" src="https://i.imgur.com/wVPrUPC.png"></img>
            <button onClick={handleToggle} type="button" className="btn-three">Favorites</button>
            <select className="login-select" onChange={newUser} value={abcUser}>
               <option>Select Current User</option>
               {userList}
            </select>
            <input className="main-search" onChange={handleSearch} className="prompt" placeholder="Search for art"/>
            <i className="search-icon" />
        </div>
    )
}
export default Login