import { Link } from "react-router-dom";
import "../style.css";
const feather = require('feather-icons');

setTimeout(() => {
  feather.replace();
}, 1000);

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to="/" className="navbar-brand">DayLine</Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" aria-current="page">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Cursos</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                            <button className="btn btn-outline-success" type="submit"><i className="feather-center" data-feather="search"></i></button>
                        </form>
                    </div>
                </div>
                <hr></hr>
            </nav>
        </header>
    );
}
export default Header;
