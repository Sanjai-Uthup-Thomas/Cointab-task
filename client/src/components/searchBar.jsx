import React from 'react'
import './searchBar.css'

function SearchBar({search}) {
  return (
  
    <div className="relative">
        <input
            id="search"
            type="text"
            onChange={(e)=>search(e.target.value)}
        />
    </div>
  )
}

export default SearchBar