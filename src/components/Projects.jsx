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
              <img src="../src/assets/clearpathscreen.png"className="bg-white" style={{ width: "100%", borderRadius: "10px 10px 0px 0px"}}/>
              <div className="h-full text-white" style={{flex: '1', borderRadius: "0px 0px 10px 10px"}}>
                <h3 className="h-full text-white text-center text-2xl" style={{marginTop: '20px', marginBottom: '10px'}}>ClearPath Accounting</h3>
                <hr className="h-1 border-none bg-orange-400 mb-5"/>
                <p className="min-h-45 text-white" style={{ paddingLeft: '10px', paddingRight: '10px', fontSize: '12pt'}}>Concept website for an accounting firm, designed to communicate trust, clarity, and professionalism through a structured, minimal layout.<br /><br />.-[Tech Stack]-.<br/> TypeScript + React + Tailwind CSS + Node.js + Vite + Vercel</p>
              </div>
              <a href="https://accounting-site-nu.vercel.app/" target="_blank">
                <div className="font-bold text-xl relative bottom-0" id="projectCta" style={{  padding: '10px 0 0 0', marginTop: '15px', display: 'flex', justifyContent: 'center', backgroundImage: 'repeating-linear-gradient(45deg, rgb(240, 119, 48), rgb(239 104 49) 2px, rgb(243 147 49) 6px, rgb(243 147 49) 6px)', borderRadius: '0 0 10px 10px', height: '40px'}}>
                  Visit Concept Site
                  </div>
                </a>
              </div>
              </div>
            </div>
            {/* End Project Card */}

            {/* Begin Project Card */}
            <div className="transition delay-60 duration-300 ease-in-out hover:-translate-y-3 hover:scale-102 hover:shadow-lg/30 shadow-blue-500/50  text-white text-left not-prose overflow-auto rounded-md outline outline-white/5 bg-gray-950 p-6">
              <div className="not-prose overflow-auto rounded-lg outline outline-white/5 bg-zinc-800/50 p-0">
                <div className="outline outline-white/5 rounded-lg">
              <img src="../src/assets/greenscapescreen.png" style={{ width: "100%", borderRadius: "10px 10px 0px 0px"}}/>
              <div className="text-white" style={{flex: '1', borderRadius: "0px 0px 10px 10px"}}>
                <h3 className="text-white text-center text-2xl" style={{marginTop: '20px', marginBottom: '10px'}}>GreenScape Landscaping</h3>
                <hr className="h-1 border-none bg-orange-400 mb-5"/>
                <p className="min-h-45 text-white" style={{paddingLeft: '10px', paddingRight: '10px', fontSize: '12pt'}}>Concept website for a landscaping business, focused on clean design, clear service presentation, and conversion-focused layout.<br /><br />.-[Tech Stack]-.<br/> TypeScript + React + Tailwind CSS + Node.js + Vite + Vercel</p>
              </div>
              <a href="https://rj-greenscape.vercel.app/" target="_blank">
                <div className="font-bold text-xl bottom-0" id="projectCta" style={{ padding: '10px 0 0 0', marginTop: '15px', display: 'flex', justifyContent: 'center', backgroundImage: 'repeating-linear-gradient(45deg, rgb(240, 119, 48), rgb(239 104 49) 2px, rgb(243 147 49) 6px, rgb(243 147 49) 6px)', borderRadius: '0 0 10px 10px', height: '40px'}}>
                  Visit Concept Site
              </div>
              </a>
            </div>
          </div>
            </div>
            {/* End Project Card */}
            {/* Begin Project Card */}

            <div className="transition delay-60 duration-300 ease-in-out hover:-translate-y-3 hover:scale-102 hover:shadow-lg/30 shadow-blue-500/50  text-white text-left not-prose overflow-auto rounded-md outline outline-white/5 bg-gray-950 p-6">
              <div className="h-full not-prose overflow-auto rounded-lg outline outline-white/5 bg-zinc-800/50 p-0">
                <div className="outline outline-white/5 rounded-lg">
              <img src="../src/assets/comingsoon.png" style={{ width: "100%", borderRadius: "10px 10px 0px 0px"}}/>
              <div className="h-full text-white" style={{flex: '1', borderRadius: "0px 0px 10px 10px"}}>
                <h3 className="h-full text-white text-center text-2xl" style={{marginTop: '20px', marginBottom: '10px'}}>Coming Soon</h3>
                <hr className="h-1 border-none bg-orange-400 mb-5"/>
                <p className="min-h-45 text-white" style={{ paddingLeft: '10px', paddingRight: '10px', fontSize: '12pt'}}>New projects on the way. Focused on creating clean, effective websites that help businesses stand out and convert.</p>
              </div>
              <a href="">
                <div className="font-bold text-xl relative bottom-0" id="projectCta" style={{  padding: '10px 0 0 0', marginTop: '15px', display: 'flex', justifyContent: 'center', backgroundImage: 'repeating-linear-gradient(45deg, rgb(240, 119, 48), rgb(239 104 49) 2px, rgb(243 147 49) 6px, rgb(243 147 49) 6px)', borderRadius: '0 0 10px 10px', height: '40px'}}>

                  </div>
                </a>
              </div>
              </div>
            </div>
            {/* End Project Card */}
          </div>
        </section>

  )
}
