import React from 'react'
import Art from './Art'
import ContainerCard from './ContainerCard'
import UserContainer from './UserContainer'
import { useState, useEffect } from 'react'


function Container() {

    const [artCards, showArtCards] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/artworks")
        .then(res => res.json())
        .then(data => showArtCards(data))
    }, [])

    

    return (
        <div>
            <ContainerCard artCards={artCards} />
            <UserContainer artCards={artCards}/>
        </div>
    )
}

export default Container