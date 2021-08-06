import React from 'react'
import { Card} from 'semantic-ui-react'
import {useState} from "react"
import "./Card.css"

function Art(props) {

    const [front, setFront] = useState(true)
    const [toggleLike, setToggleLike] = useState(false) 
    

    const {id, artist_info, title, img_url, tags, abcUser, addArt} = props
    
    const tagsArr = tags.map((tag) => {
        return(
            <li>{tag.name}</li>
            )
    })


    const handleToggle = () => {
        setToggleLike(toggleLike => !toggleLike)
    }

    const handleClick = (e) => {
        setFront(front => !front)
    }

    const handleLike = () => {
        if (abcUser.id){
            fetch(`http://localhost:3000/likes`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({user_id: abcUser.id, art_id: id})
            })
            .then(res => res.json())
            .then(addArt)
        }
 
    }

    return (
        
        <Card className="cards">
                {front ? 
                <div className="photo">
                    <img src= {img_url} alt= "oops"/>
                    <br></br>
                    <button className = "similar" onClick={handleLike}>Favorite</button>
                    <button className = "details" onClick={handleClick}>Details</button>
                </div>
                :
                <div className="text">
                    <h2>{title}</h2>
                    <h3>by {artist_info}</h3>
                    <p3 style= {{fontWeight: 'bold'}}>Tags: </p3>
                    <p4>{tagsArr}</p4>

                    <button className="art" onClick={handleClick}>Show Art</button>
                </div> 
}
        </Card>
        
    )
}

export default Art;