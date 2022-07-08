import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <h3>
                ©2022 K Glidden <br />
                <Link to="https://www.linkedin.com/in/kelseaglidden/" >
                    <i class="fa-brands fa-linkedin"></i>
                </Link>
                <Link to="https://github.com/freyaliesel"><i class="fa-brands fa-github"></i></Link>
                <Link to="mailto:freyacodes@gmail.com"><i class="fa-solid fa-envelope"></i></Link>
                <Link to="tel:+13127678068"><i class="fa-solid fa-phone"></i></Link>
            </h3>
        </footer>
    );
}

export default Footer;
