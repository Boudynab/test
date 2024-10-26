import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">back to hompage..</Link>
        </div>
     );
}
export default NotFound;