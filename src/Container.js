import React from 'react'
import Art from './Art'
import ContainerCard from './ContainerCard'
import UserContainer from './UserContainer'
import { useState, useEffect } from 'react'


function Container({filteredArt, isLoggedIn}) {

    

    

    return (
        <div>
            {/* {isLoggedIn ? */}
            <ContainerCard filteredArt={filteredArt} />
            {/* : */}
            {/* <UserContainer filteredArt={filteredArt}/>
            } */}
        </div>
    )
}

export default Container