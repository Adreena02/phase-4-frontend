// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'
import React from 'react'
import "./Login.css"


function Login({userList, newUser, setChangeUser, changeUser}) {
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
            <button class="home-btn">Home</button>
            <select className="login-select" onChange={newUser} value={changeUser}>
               <option>Select Current User</option>
               {userList}
            </select>
        </div>
    )
}
export default Login