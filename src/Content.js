import React from 'react'
import NavBar from './NavBar'
import Container from './Container'
import { useState, useEffect } from 'react'

function Content() {

    const [artCards, showArtCards] = useState([])
    const [search, setSearch] = useState("")
    const [users, setUsers] = useState([])
    const [isLoggedIn, setLoggedIn] = useState("")
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
 
    const handleToggle = () => {
        setToggle(!toggle)
      }


        const handleSearch = (e) => {
            setSearch(e.target.value)
    }


    return (
        <div>
            <NavBar 
                filteredArt={filteredArt} 
                handleSearch={handleSearch} 
                setLoggedIn={setLoggedIn} 
                users={users}
                handleToggle={handleToggle}/>
            <Container 
                filteredArt={filteredArt} 
                isLoggedIn={isLoggedIn} 
                toggle={toggle}/>
        </div>
    )
}

export default Content