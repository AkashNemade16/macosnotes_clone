import React from 'react'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    return (
        <div>
            <input 
            type="text"
            placeholder='Search...'
            onChange={(event)=>{
                setSearchTerm(event.target.value)
            }}/>
            
        </div>
    )
}

export default SearchBar
