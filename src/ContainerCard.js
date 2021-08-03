import React from 'react'
import Art from './Art'
import Footer from './Footer'

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