import { useState } from "react"

function NoResults() {
    
    const [stillLoading, setStillLoading] = useState(true)

    setTimeout(()=>setStillLoading(false), 3000)

    if (stillLoading) {
        return (
            <div className="still-loading">
                <h1>Still Loading ... </h1>
            </div>
        )
    } else {
        
        return (
            <div className="no-results">
                <h1>No Results Found!</h1>
            </div>
        )
    }

}

export default NoResults