
import SearchResultItem from "./SearchResultItem"
import BeforeSearch from "./BeforeSearch"
import NoResults from "./NoResults"

function ResultsContainer(props) {
    const {searchResults, myConcerts, handleUpdateMyConcerts, searchAttempted} = props
    //console.log(searchResults[0])
    
    const renderedResults = searchResults.slice(0,20).map((result,index)=> {
        return <SearchResultItem 
            key={index} 
            searchResultDetails={result}
            myConcerts={myConcerts}
            handleUpdateMyConcerts={handleUpdateMyConcerts}/>
    })

    if (searchAttempted && searchResults.length!==0){
        return (
            <div className="results-container">
                <h1 className="results-header">Results:</h1>
                <ul className="results-list">
                    {renderedResults}
                </ul>
            </div>
        )
    } else if (searchAttempted) {
        return <NoResults />
    } else {
        return <BeforeSearch />
    }



    // return (
    //     <div className="results-container">
    //         <h1>Results:</h1>
    //         <ul className="results-list">
    //             {renderedResults}
    //         </ul>
    //     </div>
    // )
}

export default ResultsContainer