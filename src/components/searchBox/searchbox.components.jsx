import React from 'react'
import './searchbox.styles.css'

export const SearchBox = ({ placeholder, handleChange}) => (
    <div class="search">
        <input className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
        />
    </div>
)