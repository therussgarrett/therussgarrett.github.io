export default function About({ setActiveSection }) {
  return (

      <section id="about" className="bg-slate-950" style={{ textAlign: 'center', padding: '4rem 2rem' }}>

        {/* Circular Photo + Bio Container */}
        <div style={{
          maxWidth: '1300px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'right',
          gap: '10px'
        }}>

          {/* Circular Profile Photo */}
          <div id="profile" style={{
            margin: 'auto',
            marginTop: '50px',
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '6px solid #6e7276',
            boxShadow: '0 10px 40px rgba(16,17,18,0.7)',
            flexShrink: 0
          }}>
            <img
              src="https://avatars.githubusercontent.com/u/206173594?v=4"
              alt="Russ Garrett"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Bio Content */}
          <div className="text-white text-left not-prose overflow-auto rounded-lg outline outline-white/5 bg-gray-950 p-8" style={{ maxWidth: '800px', margin: 'auto', }}>
            <h3 className="text-center text-white text-4xl py-6">
              Hi, I'm Russ
            </h3>
            <div className="not-prose overflow-auto rounded-lg outline outline-white/5 bg-zinc-800/50 p-8">


            <p className="text-3xl">
              Many small business websites are slow, outdated, or don’t generate real results.</p><br />

<p className="flex text-xl"><img src="../src/assets/plus.svg" className="pr-3 w-7"/>I design and build websites that are fast, modern, and built to convert.</p><br />

<p className="flex text-xl"><img src="../src/assets/plus.svg" className="pr-3 w-7"/>My focus is on clean design, strong performance, and creating a user experience that actually turns visitors into customers—without unnecessary complexity.</p>
<br />
<p className="flex text-xl"><img src="../src/assets/plus.svg" className="pr-3 w-7"/>Whether you need a new site or want to improve an existing one, I build solutions that are simple, effective, and built to last.</p>
            <br/>


            <div className="flex-col md:flex-row" style={{
              display: 'flex',
              gap: '1.25rem',
              justifyContent: 'center',
              alignItems: 'left',
              //flexWrap: 'wrap'
            }}>
            <button class="btn" style={{ width: '100%', borderRadius: '6px',
              backgroundImage: 'repeating-linear-gradient(45deg, rgb(240, 119, 48), rgb(239 104 49) 2px, rgb(243 147 49) 6px, rgb(243 147 49) 6px)'
            }} onClick={() => setActiveSection('projects')}>
              <a
                href="#projects"
                style={{
                  color: '#ffffff',
                  padding: '1rem 2.25rem',
                  borderRadius: '9px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                View My Projects
              </a>
            </button>
            <button class="btn" style={{ width: '100%', borderRadius: '6px',
              backgroundImage: 'repeating-linear-gradient(45deg, rgb(240, 119, 48), rgb(239 104 49) 2px, rgb(243 147 49) 6px, rgb(243 147 49) 6px)'
              }} onClick={() => setActiveSection('contact')}>
              <a
                href="#contact"
                style={{
                  color: '#ffffff',
                  padding: '1rem 2.25rem',
                  borderRadius: '9px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                Hire Me
              </a>
              </button>
            </div>
          </div>
        </div>
        </div>
      </section>
  )
}
