import React from 'react'
import ContainerCard from './ContainerCard'
import UserContainer from './UserContainer'
import { useState, useEffect } from 'react'


function Container({filteredArt, toggle, users, abcUser}) {
    const [faves, setFaves] = useState([])

    function addArt(art){
        console.log("yp", art)
        setFaves([art, ...faves])
    }



    useEffect(() => {
        if (abcUser.id){
            fetch(`http://localhost:3000/users/${abcUser.id}/favorites`)
            .then(res => res.json())
            .then(data => setFaves(data))
            // .then(console.log)
        }
    }, [abcUser])


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
                    <UserContainer abcUser={abcUser} faves={faves} deleteFromFaves={deleteFromFaves} addArt={addArt}/>
                    
                    {/* {favArt} */}
                </div>
                // <UserContainer>
                //     <FavArt />
                //     <SuggestedArt />
                // </UserContainer>
                ) : (
                <ContainerCard filteredArt={filteredArt} abcUser={abcUser} addArt={addArt}/>
            )}
        </div>
    )
}

export default Container