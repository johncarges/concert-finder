

import { useEffect, useState } from "react"

const savedConcerts = "http://localhost:4000/concert"

function MyConcerts({myConcerts, handleUpdateMyConcerts}) {
    const [openDropdownId, setOpenDropdownId] = useState(null)
    


    const deleteFavorite = (concertId) => {
        fetch(savedConcerts + `/${concertId}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then(() => {
                handleUpdateMyConcerts((prevConcerts) =>
                    prevConcerts.filter((concert) => concert.id !== concertId)
                )
                setOpenDropdownId(null)
            })
    }



    const toggleDropdown = (concertId) => {
        if (openDropdownId === concertId) {
            setOpenDropdownId(null)
        } else {
            setOpenDropdownId(concertId)
        }
    }



    const renderMyConcerts = myConcerts.map((concert) => (
        <ul key={concert.id}>
            <li>
                <p>{concert.name} on {concert.date}</p>
                <button onClick={() => toggleDropdown(concert.id)}>
                    Details⏬
                </button>
                <button onClick={() => deleteFavorite(concert.id)}>
                    Remove🗑
                </button>
                {openDropdownId === concert.id && (
                    <div>
                        <p>Venue: {concert.venue}</p>
                        <p>Location: {concert.location}</p>
                        <p>Date: {concert.date}</p>
                    </div>
                )}
            </li>
        </ul>
    ))



    return (
        <div>
            {renderMyConcerts}
        </div>
    )
}



export default MyConcerts
