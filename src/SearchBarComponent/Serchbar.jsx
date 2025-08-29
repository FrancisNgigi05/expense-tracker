import React from 'react'
import './SearchBar.css'

function Serchbar( {searchTerm, onSearchChange} ) {
  return (
    <div>
     <input
        id="search-bar"
        type="text"
        placeholder='🔍Search expenses...'
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
     /> 
    </div>
  )
}

export default Serchbar
