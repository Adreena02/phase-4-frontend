import React from 'react'
import Art from './Art'

function ContainerCard({filteredArt, abcUser, addArt}) {
    

    const artArr = filteredArt.map((artimg) => {
        return(
            <Art key = {artimg.id} 
                {...artimg} abcUser={abcUser} addArt={addArt}/>
            )
    })



    return (
        <div>
            {artArr}
            
        </div>
    )
}

export default ContainerCard