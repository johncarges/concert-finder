import { Link } from "react-router-dom/cjs/react-router-dom.min";

function HomePage() {
    return(
        <div className="home-page">
            <h1 className="home-page-header">Welcome to Concert-Finder!</h1>
            <p className="home-page-body">
                At Concert-Finder, we want to help you find and plan your next incredible concert night! We know that you can't always buy tickets as soon as you hear about a new concert in town. Whether it's soaring ticket prices, flakey friends, or uncertain plans, it can be hard to know when to pull the trigger and buy tickets. With Concert-Finder, you can search for concerts, save concerts you might be interested in, and share your saved concerts with friends, to plan a fun night out for the whole gang!
            </p>
            <Link className="home-page-link" to="/find-concerts">Get started</Link>
        </div>
    )
}

export default HomePage