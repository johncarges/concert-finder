import { useState } from "react"
import SearchBar from "./SearchBar"


function SearchContainer({handleSubmit}){
    
    return (
        <div>
            <SearchBar 
                searchType={"band"}
                handleSubmit={handleSubmit} 
                 
                />
            <SearchBar 
                searchType={"venue"} 
                handleSubmit={handleSubmit} 
                 
                />
            <SearchBar 
                searchType={"city"} 
                handleSubmit={handleSubmit} 
                />

        </div>
    )
}

export default SearchContainer