export default function Hero() {
 return (
  <div className="container border border-neutral-200 rounded py-36 px-6 flex flex-col gap-6">
   <div className="flex gap-4 -mb-8 text-2xl">
    <span>👋🏻</span><span>I'm</span>
   </div>
   <div className="flex gap-8 font-medium text-9xl">
    <span>Kari</span><span>Sakib</span>
   </div>
   <p className="text-neutral-400">Self taught full stack developer having proficiency in JavaScript and Python (their frameworks and ecosystems).</p>
   <div>
   <button className="py-2 px-3 rounded bg-slate-900 text-white text-md">Know more about me</button>
   </div>
  </div>
 )
}
