import { Link } from "react-router-dom";

function Header()
{
    return(
        <>
            <Link to="./"> Home </Link>
            <Link to="./AboutUs"> AboutUs </Link>
            <Link to="./Contact"> Contact Us </Link>
        </>
    );
}

export default Header;