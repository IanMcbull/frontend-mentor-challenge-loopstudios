import BurgerMenu from "../assets/images/icon-hamburger.svg";
import Logo from "../assets/images/logo.svg"
function Navigation() {
  return (
    <nav className="flex justify-between items-center">
      <img src={Logo} alt="logo"/>
      <div>
      <img src={BurgerMenu} alt="Burger Menu" className="w-8"/>
      </div>
    </nav>
  )
}

export default Navigation