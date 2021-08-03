import React from 'react'
import NavBar from './NavBar'
import Container from './Container'
import { useState, useEffect } from 'react'

function Content() {

    const [artCards, showArtCards] = useState([])
    const [home, setHome] = useState(false)
    const [search, setSearch] = useState("")
    const [userLog, setUserLog] = useState(false)
    const [toggleState, setToggleState] = useState(false)


    useEffect(() => {
        fetch("http://localhost:8000/artworks")
        .then(res => res.json())
        .then(data => showArtCards(data))
    }, [])


    const filteredArt = artCards.filter(artCard =>  {
        return (artCard.title.toLowerCase().includes(search.toLowerCase()))
        ||
        (artCard.artist.toLowerCase().includes(search.toLowerCase()))
    })

    const handleToggleState = () => {
        setToggleState(toggleState => !toggleState)
      }

    


    const handleSearch = (e) => {
            setSearch(e.target.value)
    }

    return (
        <div>
            <NavBar filteredArt={filteredArt} handleSearch={handleSearch} handleToggleState={handleToggleState}/>
            <Container filteredArt={filteredArt}/>
        </div>
    )
}

export default Content