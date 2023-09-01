import "../styles/navbar.scss";
import logo from "../assets/icons/logo.svg";
import { FcMenu } from "react-icons/fc";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";
export default function NavBar() {
    const [switchMenu, setSwitchMenu] = useState(false)

    function handleMenuSwitch(){
        setSwitchMenu(!switchMenu)
    }
  return (
    <div className="navbar-container">
      <nav>
        <div className="logo-section">
          <img src={logo} alt="stucademy logo" />
        </div>

        <div className="mobile-menu">
          {!switchMenu && <FcMenu className="icon" onClick={()=>handleMenuSwitch()} />}
          {switchMenu && <LiaTimesSolid className="icon" onClick={()=>handleMenuSwitch()} />}
        </div>

        <div className={switchMenu?"desktop-view opacity-1":"desktop-view "}>
          <ul className="links-section">
            <li>About</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>

          <div className="button-section">
            <button>Get it Now</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
