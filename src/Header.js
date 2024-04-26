import { Link } from 'react-router-dom';
import logoImage from './logo.17a7b2f2883b56b71238.jpg'


const Header = () => {
  return (
    <nav>
    <div className="logo">
      <img src={logoImage} alt="Logo" />
    </div>
    {/* <!-- //NOTE - Navbar menu --> */}
    <div className="nav-menu">
      <button><Link to="CharPage" className='Link'>Characters</Link></button>
      <button><Link to = "EpiPage" className='Link'>Episodes</Link></button>
    </div>

    {/* <!-- //NOTE - Login button --> */}
    <div className="nav-login">
      <button className='Link'>Login</button>
    </div>
    </nav>
  )
}

export default Header;
