import React from 'react'
import { Card} from 'semantic-ui-react'
import {useState} from "react"
import "./Card.css"

function Art(props) {

    const [front, setFront] = useState(true)
    const [toggleLike, setToggleLike] = useState(false) 
    




    const {artist_info, title, img_url, tags, handleFavButton, id, artId} = props

    // console.log("hiya")
    
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

    return (
        
        
        <Card className="cards">
                {front ? 
                <div className="photo">
                    <div>{id}</div>
                    <img src= {img_url} alt= "oops"/>
                    <br></br>
                    <button onClick={handleFavButton} className = "similar">Add to Favorites</button>

                    <button className = "details" onClick={handleClick}>Show Details</button>
                </div>
                :
                <div className="text">
                    <h4>{title}</h4>
                    <h5>by {artist_info}</h5>

                        {toggleLike ? (
                            <button
                                onClick={handleFavButton}
                                className="favorite active"
                            >
                                ★
                            </button>
                            ) : (
                            <button
                                onClick={handleFavButton}
                                className="favorite unactive"
                            >
                                ☆
                            </button>
                            )}
                        <br></br>
                        <p3>tags: {tagsArr}</p3>

                    <button className="art" onClick={handleClick}>Show Art</button>
                </div> 
                }
        </Card>


        
    )
}

export default Art;