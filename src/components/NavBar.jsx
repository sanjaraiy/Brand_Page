import { IoMenuSharp } from "react-icons/io5";
function NavBar() {
 
  
  return (
    <nav>
        <div className='logo'>
            <img src="/Images/brand_logo.png" alt="logo" />
        </div>
        {/* <IoMenuSharp className="menu-btn"/> */}
        <ul className="grow-items">
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
        <button className="login-btn">Login</button>
 </nav>
  )
}

export default NavBar