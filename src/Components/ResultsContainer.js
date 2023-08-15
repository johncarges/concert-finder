
import SearchResultItem from "./SearchResultItem"


function ResultsContainer({searchResults}) {
    console.log(searchResults[0])
    
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