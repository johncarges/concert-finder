

// Format for display

function restructureDate(date) {
    // 2023-08-17T03:00:00   =>     08/17/2023
    const [y,m,d] = date.slice(0,10).split("-")
    return `${m}/${d}/${y}`
}

function capitalize(str) {
    // miami => Miami
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}


// URLS
const API_URL = "https://api.seatgeek.com/2"
const db_URL = "http://localhost:4000/concert"
const auth = process.env.REACT_APP_ENCODED_AUTH

export {restructureDate , capitalize, API_URL, db_URL, auth}