import ResultsContainer from "./ResultsContainer"
import SearchContainer from "./SearchContainer"

function FindConcerts() {
    return (
        <div className="find-concerts-container">
            <h1>Find Concerts component goes here</h1>
            <SearchContainer />
            <ResultsContainer />
        </div>
    )
}

export default FindConcerts