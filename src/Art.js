import React from 'react'
import { Card } from 'semantic-ui-react'
import "./App.css"

function Art({title, artist, image, id}) {



    return (
    //     <div>
    //         <div className="card" id="art-card" style={{width: "25rem"}}>
    //         <img src={image}   class="art-img" alt="some alt"/>
    //         <div class="card-body">
    //         <h4 class="card-title">{title}</h4>
    //         <h6 class="card-artist">{artist}</h6>
    //         </div>
    //     </div>
    //   </div>
        <Card className="cards">
            <div className="photo">
                <img src={image} alt= "oops"/>
            </div>
            <div className="content">
                {title}
                <br></br>
                {artist}
            </div>        
        </Card>
        
    )
}

export default Art;