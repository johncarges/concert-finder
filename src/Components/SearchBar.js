import { useState } from "react"


function SearchBar({searchType, handleSubmit, handleChange}) {
    
    function handleChange(event) {
        setFormData({
            ...formData,
            query: event.target.value
        })
    }

    const [formData, setFormData] = useState({type: searchType, query: ""})
    const value = formData.query
    
    function handleClick(event) {
        event.preventDefault()
        handleSubmit(formData)
    }
    
    return (
        <div>
            <h1>{`By ${searchType}`}</h1>
            <form onSubmit={handleClick}>
                <input 
                    value={value}
                    onChange={handleChange} 
                    type="text" 
                    name={searchType} 
                    placeholder={searchType} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}   

export default SearchBar