import { Button } from 'bootstrap'
import React from 'react'

function Login({handleToggle}) {


    return (
        <div>
            Welcome User! (not you?) LOGOUT
            <button>HOME</button>
            <button onClick={handleToggle}>LOGIN</button>
        </div>
    )
}
export default Login