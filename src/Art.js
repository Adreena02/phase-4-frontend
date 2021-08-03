import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import {useState} from "react"
import "./App.css"

function Art(props) {

    const [front, setFront] = useState(true)
    const [toggleLike, setToggleLike] = useState(false)

    const {artist_info, id, title, img_url, likes, art_tags} = props
    
    const tagsArr = art_tags.map((tag) => {
        return(
            <li>{tag}</li>
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
            {/* <div>
                {front ?
                <div className="photo">
                    <img src= {image} alt= "oops"/>
                    <br></br>
                    <button className = "similar">Discover similar artwork</button>
                    <button className = "details" onClick={handleClick}>Details</button>
                </div>
            </div> */}
                {front ? 
                <div className="photo">
                    <img src= {img_url} alt= "oops"/>
                    <br></br>
                    <button className = "similar">Discover similar artwork</button>
                    <button className = "details" onClick={handleClick}>Details</button>
                </div>
                :
                <div className="text">
                    <h5>{title}</h5>
                    <h6>by {artist_info}</h6>

                        {toggleLike ? (
                            <button
                                onClick={handleToggle}
                                className="favorite active"
                            >
                                ★
                            </button>
                            ) : (
                            <button
                                onClick={handleToggle}
                                className="favorite unactive"
                            >
                                ☆
                            </button>
                            )}
                        <br></br>
                        <p3>tags: {tagsArr}</p3>

                    <button className="art" onClick={handleClick}>Show Art</button>
                </div> 
            // </div>
                }
        </Card>
        
    )
}

export default Art;