import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import {useState} from "react"
import "./App.css"

function Art(props) {

    const [front, setFront] = useState(true)
    const [liked, setLiked] = useState([])
    const [toggleLike, setToggleLike] = useState(false)

    const {artist, id, title, image, likes, tags} = props
    
    const tagsArr = tags.map((tag) => {
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

    // const handleLikes = (e) => {
    //     const newLike = liked + 1
    //     fetch (`http://localhost:8000/artworks/${id}`,{
    //         method: 'PATCH',
    //         headers: { 'Content-Type': 'application/json'},
    //         body: JSON.stringify({ "likes": newLike})
    //     })
    //     .then(res => res.json())
    //     .then(res => {setLiked(res.likes)
    //     })
    // }

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
                    <img src= {image} alt= "oops"/>
                    <br></br>
                    <button className = "similar">Discover similar artwork</button>
                    <button className = "details" onClick={handleClick}>Details</button>
                </div>
                :
                <div className="text">
                    <h5>{title}</h5>
                    <h6>by {artist}</h6>

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

                    <button className="art" onClick={handleClick}>Art</button>
                </div> 
            // </div>
                }
        </Card>
        
    )
}

export default Art;