import React from 'react'
import NavBar from './NavBar'
import Container from './Container'
import { useState, useEffect } from 'react'

function Content() {

    const [artCards, showArtCards] = useState([])
    const [search, setSearch] = useState("")
    const [toggleState, setToggleState] = useState(false)
    const [users, setUsers] = useState([])
    const [isLoggedIn, setLoggedIn] = useState("")


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
 

    const handleToggleState = () => {
        setToggleState(toggleState => !toggleState)
      }


        const handleSearch = (e) => {
            setSearch(e.target.value)
    }


    return (
        <div>
            <NavBar filteredArt={filteredArt} handleSearch={handleSearch} setLoggedIn={setLoggedIn} users={users}/>
            <Container filteredArt={filteredArt} isLoggedIn={isLoggedIn} />
        </div>
    )
}

export default Content