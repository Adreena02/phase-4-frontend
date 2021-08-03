import React from 'react'
function Search({handleSearch}) {
    return (
        <div>
         <div className="ui icon input">
        <input onChange={handleSearch} className="prompt" placeholder="Search for your favorite"/>
        <i className="search icon" />
      </div>
        </div>
    )
}
export default Search