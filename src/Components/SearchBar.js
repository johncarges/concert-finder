
function SearchBar({searchType}) {
    return (
        <div>
            <h1>{`By ${searchType}`}</h1>
            <input placeholder={searchType} />
        </div>
    )
}

export default SearchBar