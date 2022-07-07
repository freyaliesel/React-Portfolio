import { Link, matchPath, useLocation } from "react-router-dom";




function Navbar() {
    const { pathname } = useLocation()
    return (
        <nav className="topnav" id="myTopnav">
            <Link to="/" className={matchPath("/", pathname)?"active":""} >
                About Me
            </Link>
            <Link to="/Projects" className={matchPath("/Projects", pathname)?"active":""}>My Work</Link>
            <Link to="/Skills" className={matchPath("/Skills", pathname)?"active":""}>My Skills</Link>
            <Link to="/Contact" className={matchPath("/Contact", pathname)?"active":""}>Contact Me</Link>
            <a
                href="javascript:void(0);"
                className="icon"
                onClick="handleNavbar()"
            >
                <i className="fa fa-bars"></i>
            </a>
            <a href="/assets/files/KGlidden Resume 2022.pdf" download>
                Resume
            </a>
        </nav>
    );
}

export default Navbar;
