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
    const [likes, setLikes] = useState([])


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

    // useEffect(() => {
    //     fetch('http://localhost:3000/likes')
    //     .then(res => res.json())
    //     .then(data => setLikes(data))
    // }, [])

    let artIds = artCards.map(artId => {

    })
    
    const filteredArt = artCards.filter(artCard =>  {
        return (artCard.title.toLowerCase().includes(search.toLowerCase()))
        ||
        (artCard.artist_info.toLowerCase().includes(search.toLowerCase()))
    })

    let userList = users.map(user => <option key= {user.id} value={user.name}> {user.name}</option>)
 
    
    const handleToggle = () => {
        setToggle(!toggle)
      }

    
      function newUser(e) {
        let currentUser = users.find(user => user.name === e.target.value)
        // setLoggedIn(true)
        setChangeUser(currentUser)
    }
 


    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    
    // Post Request for Favorite button
    
    function handleFavButton(e) {
    
        // const likedData = { user_id: changeUser.id, art_id: artCards.id}

        let newArt = filteredArt.map(artId => {
            return (
                <Container key = {artId.id} {...artId}/>
            )
        })

        // console.log(artCards[0].id)
    
        const likesObj = {
            art_id: artCards.id,
            user_id: changeUser.id
        }

        // console.log(filteredArt[0].id)

        // console.log(likesObj)
        // console.log(e.target.value)
        // console.log(changeUser.id)
        //     let likeId = likes.find(like => like.user_id === changeUser.id).id
 
        fetch('http://localhost:3000/likes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(likesObj),
            })
            .then(res => res.json())
            .then(data => console.log(data))
            // .then(data => setLikes(data))
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