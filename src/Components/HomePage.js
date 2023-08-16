import { Link } from "react-router-dom/cjs/react-router-dom.min";

function HomePage() {
    return(
        <div className="home-page">
            <h1 className="home-page-header">Welcome to Concert-Finder!</h1>
            <p className="home-page-body">Mission statement....</p>
            <Link className="home-page-link" to="/find-concerts">Get started</Link>
        </div>
    )
}

export default HomePage