import React, {useState, useEffect}from 'react'
import {Card} from 'semantic-ui-react'
import Art from './Art'
import Footer from './Footer'

function UserContainer() {
    const [faves, setFaves] = useState([])
    const faveUrl = ("")

    // props = faves


    // useEffect(() => {
    //     fetch(`http://localhost:3000/users/${id}/favorites`)
    //     .then(res => res.json())
    //     .then(data => setFaves(data))
    // }, [])

    // const removeFave(id) = () => {
    //     fetch(``), {
    //         method: 'DELETE',
    //     }
    // }

    // fetch(faveUrl, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(addFave),
    // })
    // .then((res) => res.json())
    // .then(faveData => setFaves(faveData))

//     return (
//             <Card className="cards">
//                 {front ? 
//                 <div className="photo">
//                     <img src= {img_url} alt= "oops"/>
//                     <br></br>
//                     <button className = "similar">Discover similar artwork</button>
//                     <button className = "details" onClick={handleClick}>Details</button>
//                 </div>
//                 :
//                 <div className="text">
//                     <h4>{title}</h4>
//                     <h5>by {artist_info}</h5>

//                         {toggleLike ? (
//                             <button
//                                 onClick={handleToggle}
//                                 className="favorite active"
//                             >
//                                 ★
//                             </button>
//                             ) : (
//                             <button
//                                 onClick={handleToggle}
//                                 className="favorite unactive"
//                             >
//                                 ☆
//                             </button>
//                             )}
//                         <br></br>
//                         <p3>tags: {tagsArr}</p3>

//                     <button className="art" onClick={handleClick}>Show Art</button>
//                 </div> 
//                 }
//         </Card>
//     )
}

export default UserContainer