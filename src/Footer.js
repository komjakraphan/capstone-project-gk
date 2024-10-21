import logo from "./assets/logo.svg";

function Footer() {
    return (
        <footer>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div>
                <h6>Navigation</h6>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Reservations</a></li>
                    <li><a href="/">Order Online</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </div>
            <div>
            <h6>Contact</h6>
                <ul>
                    <li><a href="/">Address</a></li>
                    <li><a href="/">Phone Number</a></li>
                    <li><a href="/">Email</a></li>x
                </ul>
            </div>
            <div>
            <h6>Social Media</h6>
                <ul>
                    <li><a href="/">Instagram</a></li>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Yelp</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;