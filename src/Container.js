import React from 'react'
import ContainerCard from './ContainerCard'
import UserContainer from './UserContainer'
import { useState, useEffect } from 'react'


function Container({filteredArt, toggle, users}) {
    const [faves, setFaves] = useState([])

    const [id] = users

    useEffect(() => {
        fetch(`http://localhost:3000/users/7/favorites`)
        .then(res => res.json())
        .then(data => setFaves(data))
    }, [])

    const favArt = faves.map(fave => {
        return (
            <UserContainer 
                key={fave.id}
                {...fave}/>
        )
    })

    

    return (
        <div>
            {toggle ? (
                <div>
                    {favArt}
                </div>
                ) : (
                <ContainerCard filteredArt={filteredArt} />
            )}
        </div>
    )
}

export default Container