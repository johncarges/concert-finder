import ResultsContainer from "./ResultsContainer"
import SearchContainer from "./SearchContainer"


function FindConcerts(props) {
    const {searchResults, handleSearchSubmit, myConcerts, handleUpdateMyConcerts} = props
    

    return (
        <div className="find-concerts-container">
            <h1>Find Concerts component goes here</h1>
            <SearchContainer handleSubmit={handleSearchSubmit}/>
            <ResultsContainer 
                searchResults={searchResults}
                myConcerts={myConcerts}
                handleUpdateMyConcerts={handleUpdateMyConcerts}/>
        </div>
    )
}

export default FindConcerts

