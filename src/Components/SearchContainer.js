import SearchBar from "./SearchBar"

function SearchContainer({handleSubmit}){
    
    return (
        <div className="search-container">
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