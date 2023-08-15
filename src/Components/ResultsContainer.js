
import SearchResultItem from "./SearchResultItem"


function ResultsContainer({searchResults}) {
    
    
    const renderedResults = searchResults.slice(0,20).map((result,index)=> {
        return <SearchResultItem key={index} searchResultDetails={result}/>
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