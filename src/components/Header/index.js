import {Link} from 'react-router-dom'
// import {Navigate} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { LuShoppingCart } from "react-icons/lu";
import './index.css'

const Header = (props) => {
  const navigate = useNavigate()
  console.log(navigate) ;
  const onLogout = () => {
    navigate('/login')
  }
  const onLogo = () => {
    console.log('on logo is triggered')
    navigate('/')
  }
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <h3 className='logo-title' onClick={onLogo}>Nxt Trends</h3>
        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/products" className="nav-link">
            <li>Products</li>
          </Link>
        </ul>
        <div className='cart-container'>
          <LuShoppingCart style={{fontSize:'30px'}}/>
            <button type="button" className="logout-desktop-btn" onClick={onLogout}>
              Logout
            </button>
        </div>
        <button type="button" className="logout-mobile-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
    </nav>
  )
}
export default (Header);