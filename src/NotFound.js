import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Sorry this page cannot be found</h1>
            <br />
            <p>click on the link below to return back to the home page</p>
            <br />
            <Link to="/">Click me </Link>
        </div>
    );
}
 
export default NotFound;