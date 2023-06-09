import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./AdminNavBar.css";

function AdminNavBar(): JSX.Element {

    const navigate = useNavigate();

    function Companies(){
        navigate("/AllCompanies")
    }

    function Customers(){
        navigate("/AllCustomers")
    }

    function goToHome() {
        navigate("/home"); // Navigate to the /home route
    }

    return (
        <div className="AdminNavBar">
            <span>
                <Link className="left-button" onClick={goToHome} color="inherit" component="button" underline="hover">HOME</Link>
                <Link className="left-button" onClick={Companies} color="inherit" component="button" underline="hover">COMPANIES</Link>
                <Link className="left-button" onClick={Customers} color="inherit" component="button" underline="hover">CUSTOMERS</Link>
            </span>
        </div>
    );
}

export default AdminNavBar;
