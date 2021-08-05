import React, {useState, useEffect}from 'react'
import {Card} from 'semantic-ui-react'
import FavArt from './FavArt'
import Art from './Art'

function UserContainer(props) {
    // const [front, setFront] = useState(true)
    const [suggestions, setSuggestions] = useState([])

    const {abcUser, faves, deleteFromFaves} = props

    useEffect(() => {
        if (abcUser.id){
            fetch(`http://localhost:3000/users/suggestions?id=${abcUser.id}`)
            .then(res => res.json())
            .then(setSuggestions)
        }
    }, [])

    const favArt = faves.map(fave => {
        return (
            <FavArt 
                key={fave.id}
                abcUser={abcUser}
                deleteFromFaves={deleteFromFaves}
                {...fave}/>
        )
    })

    const suggArt = suggestions.map(sugg => {
        return (
            <Art 
                key={sugg.id}
                abcUser={abcUser}
                {...sugg}/>
        )
    })

 

    return (
     <div>
         <h2>FAVORITE</h2>
         {favArt}
         <h2>SUGGESTIONS</h2>
         {suggArt}
     </div>
    )
}

export default UserContainer