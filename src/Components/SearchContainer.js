import SearchBar from "./SearchBar"

function SearchContainer(){
    return (
        <div>
            <SearchBar searchType={"Band"}/>
            <SearchBar searchType={"Venue"}/>
            <SearchBar searchType={"City"}/>
        </div>
    )
}

export default SearchContainer