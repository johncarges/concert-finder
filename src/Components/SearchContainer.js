import { useState } from "react"
import SearchBar from "./SearchBar"

function SearchContainer({handleSubmit}){
    
    // handleSubmit(searchQuery = {type, query})

    const initialFormState = {
        band: "",
        venue: "",
        city: ""
    }

    const [formData, setFormData] = useState(initialFormState)

    

    const callBackSetFormData = (data) => setFormData(data)
    
    return (
        <div className="search-container">
            <SearchBar 
                searchType={"band"}
                handleSubmit={handleSubmit} 
                formData={formData}
                setFormData={callBackSetFormData}
                />
            <SearchBar 
                searchType={"venue"} 
                handleSubmit={handleSubmit} 
                formData={formData}
                setFormData={callBackSetFormData}
                />
            <SearchBar 
                searchType={"city"} 
                handleSubmit={handleSubmit} 
                formData={formData}
                setFormData={callBackSetFormData}
                />

        </div>
    )
}

export default SearchContainer 