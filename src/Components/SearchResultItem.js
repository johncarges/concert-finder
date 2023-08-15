
function SearchResultItem({searchResultDetails}) {

    function restructureDate(date) {
        const [y,m,d] = date.slice(0,10).split("-")
        return `${m}/${d}/${y}`
    }
    const { datetime_local, title, venue } = searchResultDetails
    return (
        <li>
            <p>{`${restructureDate(datetime_local)}: ${title} at ${venue["name_v2"]}`}</p>
        </li>
    )

}



export default SearchResultItem