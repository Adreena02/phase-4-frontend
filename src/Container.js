import React from 'react'
import ContainerCard from './ContainerCard'
import UserContainer from './UserContainer'
import { useState, useEffect } from 'react'


function Container({filteredArt, toggle, users, changeUser, handleFavButton}) {
    const [faves, setFaves] = useState([])

// Fetch Get Request for User Favorites
    useEffect(() => {
        if (changeUser.id){
     
            fetch(`http://localhost:3000/users/${changeUser.id}/favorites`)
            .then(res => res.json())
            .then(data => setFaves(data))
            // .then(console.log)
        }
    }, [changeUser])


    


    function deleteFromFaves(artId) {

        const updatedFaves = faves.filter((fave) => {
                    return fave.id !== artId
                })
    
        setFaves(updatedFaves)
    }

    

    return (
        <div>
            {toggle ? (
                <div>
                    <UserContainer 
                    changeUser={changeUser} 
                    faves={faves} 
                    deleteFromFaves={deleteFromFaves}/>
                    
                    {/* {favArt} */}
                </div>
                // <UserContainer>
                //     <FavArt />
                //     <SuggestedArt />
                // </UserContainer>
                ) : (
                <ContainerCard 
                filteredArt={filteredArt} 
                handleFavButton={handleFavButton}/>
            )}
        </div>
    )
}

export default Container