import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser, faLinkedin } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => (
  < div className='nav-bar' >
    <Link
      className='logo'
      to='/'
    >
      <img
        src={LogoS}
        alt='logo'
      ></img>
      <img
        className='sub-logo'
        src={LogoSubtitle}
        alt='sblobodan'
      ></img>
    </Link>
    <nav>
      <NavLink
        exact='true'
        activeclass='active'
        to='/'
      >
        <FontAwesomeIcon
          icon={faHome}
          color='#4d4d4e'
        ></FontAwesomeIcon>
      </NavLink>
      <NavLink
        exact='true'
        activeclass='active'
        className='about-link'
        to='/about'
      >
        <FontAwesomeIcon
          icon={faUser}
          color='#4d4d4e'
        ></FontAwesomeIcon>
      </NavLink>
      <NavLink
        exact='true'
        activeclass='active'
        className='contact-link'
        to='/contact'
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          color='#4d4d4e'
        ></FontAwesomeIcon>
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/paolo-bosa-36847a165/">
          <FontAwesomeIcon icon={faEnvelope} color="4d4d4e"></FontAwesomeIcon>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/">
          <FontAwesomeIcon icon={faEnvelope} color="4d4d4e"></FontAwesomeIcon>
        </a>
      </li>
    </ul>
  </div >
)

export default Sidebar;
