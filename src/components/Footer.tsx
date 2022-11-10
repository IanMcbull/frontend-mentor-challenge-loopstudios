import Logo from "../assets/images/logo.svg"
function Footer() {
  return (
    <footer className="bg-black flex flex-col justify-center items-center py-14 gap-8">
       <img src={Logo} alt="logo"/>
       <div className="flex flex-col text-white gap-6 font-Alata items-center">
        <p>About</p>
        <p>Careers</p>
        <p>Events</p>
        <p>Products</p>
        <p>Support</p>
        </div>
        <div className="flex space-x-4">
        </div> 
    </footer>
  )
}

export default Footer