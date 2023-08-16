
function SearchResultItem(props) {
    const {searchResultDetails, myConcerts, handleUpdateMyConcerts} = props

    const myConcertIDs = myConcerts.map(concert=>concert.id)
    const isFavorited = myConcertIDs.includes(searchResultDetails.id)
        

    function addToFavorites() {
        const newFavorite = {
            id: searchResultDetails.id,
            name: searchResultDetails.title,
            venue: searchResultDetails.venue.name,
            location: searchResultDetails.venue.city,
            date: searchResultDetails.datetime_utc
        }
        
        const postConfig = {
            method: "POST",
            headers: {"content-type": "application/json", "accepts":"application/json"},
            body: JSON.stringify(newFavorite)
        }

        fetch("http://localhost:4000/concert", postConfig)
        .then(r=>r.json())
        .then(data=>{
            
            handleUpdateMyConcerts([
                ...myConcerts,
                data
            ])})
    }

    function removeFromFavorites() {
        fetch(`http://localhost:4000/concert/${searchResultDetails.id}`, {method: "DELETE"})
        .then(r => {if (r.ok) {
            handleUpdateMyConcerts(myConcerts.filter(concert=> {
                return concert.id !== searchResultDetails.id})
            )
        }})
    }

    function handleClickFavorites() {
        isFavorited ? removeFromFavorites() : addToFavorites()
    }

    function restructureDate(date) {
        const [y,m,d] = date.slice(0,10).split("-")
        return `${m}/${d}/${y}`
    }
    const { datetime_local, title, venue } = searchResultDetails
    const buttonText = isFavorited ? "Remove From Favorites" :"Save to Favorites"
    return (
        <li>
            <p>{`${restructureDate(datetime_local)}: ${title} at ${venue["name_v2"]}`}</p>
            <button onClick={handleClickFavorites}>{buttonText}</button>
        </li>
    )

}



export default SearchResultItem