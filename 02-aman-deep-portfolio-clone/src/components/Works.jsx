export default function Works() {
 return (
  <div className="container border border-neutral-200 rounded py-36 px-6 flex flex-col gap-6">
   <div className="flex gap-4 -mb-8 text-2xl capitalize">
    <span>My</span>
   </div>
   <div className="flex gap-8 *:text-9xl">
    <span>Works</span>
   </div>
   <p className="text-neutral-400">Here's is list of my work</p>
   <div>
   <button className="py-2 px-3 rounded bg-slate-900 text-white text-md">View my work</button>
   </div>
  </div>
 )
}
