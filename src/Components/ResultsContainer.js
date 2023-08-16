
import SearchResultItem from "./SearchResultItem"


function ResultsContainer(props) {
    const {searchResults, myConcerts, handleUpdateMyConcerts} = props
    //console.log(searchResults[0])
    
    const renderedResults = searchResults.slice(0,20).map((result,index)=> {
        return <SearchResultItem 
            key={index} 
            searchResultDetails={result}
            myConcerts={myConcerts}
            handleUpdateMyConcerts={handleUpdateMyConcerts}/>
    })

    return (
        <div>
            <h1>Results:</h1>
            <ul>
                {renderedResults}
            </ul>
        </div>
    )
}

export default ResultsContainer