import { useState } from "react"
import { capitalize } from "../helpers"


function SearchBar({searchType, handleSubmit, handleChange, formData, setFormData}) {
    
    function handleChange(event) {
        setFormData({
            ...formData,
            [searchType]: event.target.value
        })
    }

    //const [formData, setFormData] = useState({type: searchType, query: ""})
    const value = formData[searchType]
    
    function handleClick(event) {
        event.preventDefault()
        handleSubmit({type: searchType, query: value})
        setFormData({
            band: "",
            venue: "",
            city: ""
        })
    }
    
    return (
        <div>
            <h1>{`By ${capitalize(searchType)}`}</h1>
            <form onSubmit={handleClick}>
                <input 
                    value={value}
                    onChange={handleChange} 
                    type="text" 
                    name={searchType} 
                    placeholder={capitalize(searchType)} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}   

export default SearchBar