import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <hr />
            <button type="button" class="btn-one">Artworks</button>
            <button type="button" class="btn-two">Artists</button>
            <button type="button" class="btn-three">Favorites</button>
            <button type="button" class="btn-four">Tags</button>
        </div>
       
    )
}

export default Header

{/* <div className="main-header">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    {/* <div className="col">
                        <Dropdown className="d-inline mx-2" autoClose="inside">
                            <Dropdown.Toggle id="dropdown-autoclose-inside">
                                Artwork
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>    
                    </div>    
                  </div>
                </div> 
               <hr />
            </div> */}