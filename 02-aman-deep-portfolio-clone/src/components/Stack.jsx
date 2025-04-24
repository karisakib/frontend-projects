import { TECH_STACK } from "../constants";

export default function Stack() {
 return (
  <div className="container border border-neutral-200 rounded py-36 px-6 flex gap-6">

   <div className="flex flex-col border-y-neutral-200 bg-green-200 min-w-fit">
    <div className="flex gap-4 -mb-4 text-2xl capitalize">
     <span>My</span>
    </div>
    <div className="flex flex-col gap-8 *:text-9xl">
     <span>Tech</span><span>Stack</span>
    </div>
    <p className="text-neutral-400">My primary focus on javascript and python ecosystem.</p>
   </div>

   <div className="flex flex-wrap justify-start items-center gap-12 bg-red-200 min-w-1/2 ">
    {TECH_STACK.map((technology) => {
     return (
      <span className="rounded-full p-6 bg-red-400">{technology}</span>
     )
    })}
   </div>
  </div>
 )
}
