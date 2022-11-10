import Navigation from "./Navigation"

function Header() {
  return (
    <header className="min-h-[100vh] flex flex-col p-6">
     <Navigation/>
     <div className="border-2 border-white text-white min-h-[350px] my-auto flex items-center">
        <h1 className="font-Josefin uppercase text-6xl max-w-sm mx-auto">Immersive Experiences that deliver</h1>
     </div>
    </header>
  )
}

export default Header