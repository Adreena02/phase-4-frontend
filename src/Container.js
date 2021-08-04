import React from 'react'
import Art from './Art'
import ContainerCard from './ContainerCard'
import UserContainer from './UserContainer'
import { useState, useEffect } from 'react'


function Container({filteredArt, toggle}) {

    

    return (
        <div>
            {toggle ? (
                <UserContainer />
                ) : (
                <ContainerCard filteredArt={filteredArt} />
            )}
        </div>
    )
}

export default Container