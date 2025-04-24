export default function Navbar() {
 return (
  <header className="z-50 top-4 container mt-4 backdrop-blur-md bg-white/30 flex justify-between border border-neutral-200 rounded-full items-center px-6 py-6 sticky">
   <span id="logo" className="text-3xl font-semibold">K .</span>
   <nav id="links" className="flex gap-16">
    <a href="#">Home</a>
    <a href="#">Works</a>
    <a href="#">About</a>
   </nav>
   <div id="button-group" className="flex gap-4">
   <button className="rounded hover:bg-neutral-200">Theme Toggle</button>
   <button className="py-2 px-3 bg-slate-900 text-white text-sm rounded-full">Connect With Me</button>
   </div>
  </header>
 )
}