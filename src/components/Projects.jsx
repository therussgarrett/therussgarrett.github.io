import taskBoard from '/src/assets/taskboard.png'

export default function Projects({ setActiveSection }){
  return (

      <section className="bg-slate-950" id="projects" >
        <div>
          <h2 className="text-center text-white text-4xl py-10">Featured Projects</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mx-10 mb-10">
            {/* Begin Project Card */}

            <div className="transition max-w-lg delay-60 duration-300 ease-in-out hover:-translate-y-3 hover:scale-102 hover:shadow-lg/30 shadow-blue-500/50 text-white text-left not-prose overflow-auto rounded-md outline outline-white/5 bg-gray-950 p-6">
              <div className="h-full not-prose overflow-auto rounded-lg outline outline-white/5 bg-zinc-800/50 p-0">
                <div className="outline outline-white/5 rounded-lg">
              <img src={taskBoard} className="bg-white" style={{ width: "100%", borderRadius: "10px 10px 0px 0px"}}/>
              <div className="h-full text-white" style={{flex: '1', borderRadius: "0px 0px 10px 10px"}}>
                <h3 className="h-full text-white text-center text-2xl" style={{marginTop: '20px', marginBottom: '10px'}}>Real-Time Taskboard</h3>
                <hr className="h-1 border-none bg-orange-400 mb-5"/>
                <p className="min-h-45 text-white" style={{ paddingLeft: '10px', paddingRight: '10px', fontSize: '12pt'}}>Full-stack real-time task board with authentication, protected routes, Socket.io updates, and workflow-based task organization.<br /><br />.-[Tech Stack]-.<br/> TypeScript + React  + Socket.io + MongoDB + Tailwind CSS + Node.js + Vite + Vercel</p>
              </div>
              <section className="">
                <div className="font-bold md:text-xl relative bottom-0" id="projectCta" style={{  padding: '10px 0 0 0', marginTop: '15px', display: 'flex', justifyContent: 'center', backgroundImage: 'repeating-linear-gradient(45deg, rgb(240, 119, 48), rgb(239 104 49) 2px, rgb(243 147 49) 6px, rgb(243 147 49) 6px)', borderRadius: '0 0 10px 10px', height: '40px'}}>
                  <a className="" href="https://github.com/therussgarrett/realtime-task-board" target="_blank">View on Github</a>
                  <p className='px-3'>
                    |
                  </p>
                  <a className="" href="https://realtime-task-board-hazel.vercel.app/" target="_blank">Live Demo</a>
                  </div>
                
                </section>
              </div>
              </div>
            </div>
            {/* End Project Card */}

          </div>
        </section>

  )
}
