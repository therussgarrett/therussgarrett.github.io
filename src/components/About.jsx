import plusImg from '/src/assets/plus.svg'

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
          <div className="text-white text-left not-prose overflow-auto rounded-lg outline outline-white/5 bg-gray-900 p-1 mx-auto max-w-200" >
            <h3 className="align-middle justify-center text-center text-white text-5xl py-3">
              Hi, I'm Russ
            </h3>
            <div className="not-prose overflow-auto rounded-lg outline outline-white/5 bg-zinc-800/50 p-8">


            <p className=" text- text-2xl ">
              Front-End Developer focused on building modern React applications, responsive interfaces, and polished user experiences.</p><br />

<p className="flex text-lg"><img src={plusImg} className="pr-3 w-7"/>I specialize in frontend development using React, TypeScript, and modern web technologies with an emphasis on performance, usability, and clean UI design.</p><br />

<p className="flex text-lg"><img src={plusImg} className="pr-3 w-7"/>I enjoy building fast, intuitive applications that solve real problems and provide seamless user experiences across devices.</p>
<br />

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
                View Projects
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
                Contact Me
              </a>
              </button>
            </div>
          </div>
        </div>
        </div>
      </section>
  )
}
