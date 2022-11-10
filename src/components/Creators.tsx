
function Creators() {
  return (
    <section className="my-28 px-6 flex flex-col">
        <h3 className="text-5xl font-Josefin uppercase text-center">Our Creations</h3>
        <div className="mt-8 grid grid-rows-8 gap-8">
          <div className="deep-earth cards"></div>
          <div className="night-arcade cards"></div>
           <div className="soccer-team-vr cards"></div>
           <div className="the-grid cards"></div>
           <div className="above-vr cards"></div>
           <div className="pocket-borealis cards"></div>
           <div className="the-curiosity cards"></div>
           <div className="fisheye cards"></div>
        </div>
        <button className="mt-12 font-Alata uppercase border-2 border-black w-60 py-2 text-2xl self-center tracking-widest">See All</button>
    </section>
  )
}

export default Creators