import React from 'react'
import NavBar from './NavBar'
import Container from './Container'
import { useState, useEffect } from 'react'


function Content() {

    const [artCards, showArtCards] = useState([])
    const [search, setSearch] = useState("")
    const [users, setUsers] = useState([])
    const [changeUser, setChangeUser] = useState("")
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
        setChangeUser(currentUser)
        // handleState()
    }
 


    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    
    // Post Request for Favorite button
    
    function handleFavButton() {
    
    const likedData = { user_id: changeUser.id, art_id: artCards.id}
    
    console.log(changeUser.id)
    //     let likeId = likes.find(like => like.user_id === changeUser.id).id
 
    fetch(`http://localhost:3000/likes/${changeUser.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(likedData),
    })
    .then(response => response.json())
    .then(data => console.log(data))
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
                changeUser={changeUser}
                setChangeUser={setChangeUser}
                />
            <Container 
                filteredArt={filteredArt} 
                isLoggedIn={isLoggedIn} 
                toggle={toggle}
                changeUser={changeUser}
                users={users}
                handleFavButton={handleFavButton}
                />
        </div>
    )
}

export default Content