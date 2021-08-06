import React from 'react'
import Art from './Art'

function ContainerCard({filteredArt, handleFavButton, artId}) {
    

    const artArr = filteredArt.map((artimg) => {
        return (

            <Art 
            key = {artimg.id} 
            artId ={artId}
            handleFavButton={handleFavButton}
                {...artimg}/>

            
            
        )

    })



    return (
        
        <div>
            {artArr}
           console.log(artId.id)
        </div>
    )
}

export default ContainerCard