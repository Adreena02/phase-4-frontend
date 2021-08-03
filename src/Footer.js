import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div>
        <hr />
        <div className="main-footer">
           
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col">
                        <h1>DAT Art</h1>
                        <h5 className="unstyled-list">
                            <p>An art gallery site.</p>
                        </h5>
                    </div>
                  </div>
            <div className="row">
                <p className="col-sm">
                    &copy; 2021 Phase Four Project by Darren, Adreena and Terry
                </p>
            </div>
                </div>
                <hr />
            </div>
            </div>
    )
}

export default Footer