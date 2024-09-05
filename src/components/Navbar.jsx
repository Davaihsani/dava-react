import '../style/navbar.css'
import logo from '../images/logo.png'

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="top">
                    <img className='logo' src={logo} alt="" />
                    <div className="search-bar">
                        <input type="search" name="" placeholder='Search' id="" />
                        <i className="fas fa-search search-icon"></i>
                    </div>
                </div>
                <div className="text">
                    <a href="">Wheels </a>
                    <a href="">Suspension </a>
                    <a href="">Exterior styling </a>
                    <a href="">Brake </a>
                    <a href="">Interior styling </a>
                    <a href="">Merchandise </a>
                    <a href="">Gallery </a>
                </div>
            </div>
        </>
    )
}