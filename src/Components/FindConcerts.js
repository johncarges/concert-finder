import ResultsContainer from "./ResultsContainer"
import SearchContainer from "./SearchContainer"


function FindConcerts(props) {
    const {searchResults, handleSearchSubmit, myConcerts, handleUpdateMyConcerts, searchAttempted} = props
    

    return (
        <div className="find-concerts-container">
            <SearchContainer handleSubmit={handleSearchSubmit}/>
            <ResultsContainer 
                searchResults={searchResults}
                myConcerts={myConcerts}
                handleUpdateMyConcerts={handleUpdateMyConcerts}
                searchAttempted={searchAttempted}/>
        </div>
    )
}

export default FindConcerts

