import React, {useState}from 'react'
import Art from './Art'
import Footer from './Footer'

function UserContainer() {
    const [faves, setFaves] = useState([])
    const faveUrl = ("")


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

    return (
        <div>

        </div>
    )
}

export default UserContainer