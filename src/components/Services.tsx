import vrImage from "../assets/images/mobile/image-interactive.jpg"
function Services() {
  return (
    <section className="my-28 px-6 grid grid-rows-2">
      <img src={vrImage} alt="VR section image"/>
      <div className="flex flex-col gap-6 text-center">
        <h2 className="font-Josefin uppercase text-5xl">the leader in interactive vr</h2>
        <p className="text-DarkGray font-Alata text-xl leading-loose max-w-sm mx-auto">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
      </div>
    </section>
  )
}

export default Services