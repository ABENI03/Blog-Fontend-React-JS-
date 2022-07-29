import { Link } from "react-router-dom";

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container-fluid" style={{ backgroundColor: '#513252' }}>
                <Link className="navbar-brand text-white" to="/">Blog</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="navbar-brand text-white" style={{ fontSize: "15px" }} to="/createnew">New Blog</Link>
                        </li>

                    </ul>
                    <form className="d-flex">

                        <button className="btn btn-outline-info" type="button">Login</button>
                    </form>
                </div>
            </div>
        </nav>

    );
}

export default NavBar;