import React from 'react'
import Art from './Art'

function ContainerCard({filteredArt, handleFavButton}) {
    

    const artArr = filteredArt.map((artimg) => {
        return(
            <Art 
            key = {artimg.id} 
            handleFavButton={handleFavButton}
                {...artimg}/>
            )
    })



    return (
        <div>
            {artArr}
            
        </div>
    )
}

export default ContainerCard