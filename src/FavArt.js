import React, {useState, useEffect}from 'react'
import {Card} from 'semantic-ui-react'
import "./Card.css"
import Art from './Art'
import Footer from './Footer'

function FavArt(props) {
    const [front, setFront] = useState(true)
    // const [faves, setFaves] = useState([])

    const {id, likes, artist_info, img_url, title, tags, abcUser, deleteFromFaves} = props

    const handleClick = (e) => {
        setFront(front => !front)
    }

    const tagsArr = tags.map((tag) => {
        return(
            <li>{tag.name}</li>
            )
    })

        console.log(props)
    const removeFave = () => {
        if (abcUser.id){
            let likeId = likes.find(like => like.user_id === abcUser.id).id

            fetch (`http://localhost:3000/likes/${likeId}`, {
                method: 'DELETE',
            })
        }

        deleteFromFaves(id)
        
    }

    // fetch(faveUrl, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(addFave),
    // })
    // .then((res) => res.json())
    // .then(faveData => setFaves(faveData))

    return (
        <Card className="cards">
                {front ?
                 <div className="photo">
                    <img src= {img_url} alt= "oops"/>
                    <br></br>
                    <button className = "similar" onClick={removeFave}>delete artwork</button>
                    <button className = "details" onClick={handleClick}>Details</button>
                 </div>
                 :
                 <div className="text">
                    <h4>{title}</h4>
                    <h5>by {artist_info}</h5>
                    <button className="favorite active">
                                ★
                    </button>
                    <p3>tags: {tagsArr}</p3>
                    <button className="art" onClick={handleClick}>Show Art</button>
                </div>
                }
        </Card> 
    )
}

export default FavArt