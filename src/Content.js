import React from 'react'
import NavBar from './NavBar'
import Container from './Container'
import { useState, useEffect } from 'react'

function Content() {

    const [artCards, showArtCards] = useState([])
    const [search, setSearch] = useState("")
    const [users, setUsers] = useState([])
    const [abcUser, changeUser] = useState("")
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [toggle, setToggle] = useState(false)


    useEffect(() => {
        fetch("http://localhost:3000/arts")
        .then(res => res.json())
        .then(data => showArtCards(data))
    }, [])

    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    
    const filteredArt = artCards.filter(artCard =>  {
        return (artCard.title.toLowerCase().includes(search.toLowerCase()))
        ||
        (artCard.artist_info.toLowerCase().includes(search.toLowerCase()))
    })

    let userList = users.map(user => <option key= {user.id} value={user.name}> {user.name}</option>)
 
    
    const handleToggle = () => {
        setToggle(!toggle)
      }

    // const handleState = () => {
    //     setLoggedIn(!isLoggedIn)
    // }
    
      function newUser(e) {
        let currentUser = users.find(user => user.name === e.target.value)
        setLoggedIn(true)
        changeUser(currentUser)
        // handleState()
    }
 


    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    
    

    return (
        <div>
            <NavBar 
                filteredArt={filteredArt} 
                handleSearch={handleSearch} 
                // setLoggedIn={setLoggedIn} 
                newUser={newUser}
                userList={userList}
                // users={users}
                handleToggle={handleToggle}
                abcUser={abcUser}
                changeUser={changeUser}
                />
            <Container 
                filteredArt={filteredArt} 
                isLoggedIn={isLoggedIn} 
                toggle={toggle}
                abcUser={abcUser}
                users={users}/>
        </div>
    )
}

export default Content