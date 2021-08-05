import React from 'react'
import Art from './Art'

function ContainerCard({filteredArt}) {
    

    const artArr = filteredArt.map((artimg) => {
        return(
            <Art key = {artimg.id} 
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