import React from 'react'
import Art from './Art'
import ContainerCard from './ContainerCard'
import UserContainer from './UserContainer'
import { useState, useEffect } from 'react'


function Container({filteredArt}) {

    

    return (
        <div>
            {/* {home ? */}
            <ContainerCard filteredArt={filteredArt} />
            {/* : */}
            {/* <UserContainer artCards={artCards}/>
            } */}
        </div>
    )
}

export default Container