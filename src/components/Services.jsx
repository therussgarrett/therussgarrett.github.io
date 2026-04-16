export default function Services({ setActiveSection }){
  return (

    <section id="skills" className="bg-slate-950 px-10">
      <h2 className="text-center text-white text-4xl py-10">
        How I Can Help
      </h2>
      <div className="text-white not-prose overflow-auto rounded-lg outline outline-white/5 bg-gray-950 p-8">
        <div className="not-prose overflow-auto rounded-lg outline outline-white/5 bg-zinc-800/50 p-8">
      <p style={{
        textAlign: 'center',
        fontSize: '1.25rem',
        maxWidth: '720px',
        margin: '0 auto 4rem',
        color: '#b8bdc2',
        lineHeight: '1.7'
      }}>
        I focus on building fast, reliable websites using modern tools that are easy to maintain and scale.
      </p>
      <ul>
        <li className="mb-10">
          <h3 className="flex text-3xl">
            <img src="../src/assets/plus.svg" className="pr-3 w-7"/>Website Design & Development
          </h3>
          <p className="ml-10 mt-2">
            Clean, modern websites built to reflect your brand and make a strong first impression.
          </p>
        </li>
        <li className="mb-10">
          <h3 className="flex text-3xl">
            <img src="../src/assets/plus.svg" className="pr-3 w-7"/>Performance Optimization
          </h3>
        <p className="ml-10 mt-2">
          Faster load times and smoother experiences that keep visitors engaged.
        </p>
      </li>
        <li className="mb-10">
          <h3 className="flex text-3xl">
            <img src="../src/assets/plus.svg" className="pr-3 w-7"/>Layouts designed to turn visitors into customers.
          </h3>
        <p className="ml-10 mt-2">
          Clean, modern websites built to reflect your brand and make a strong first impression.
        </p>
      </li>
        <li className="mb-10">
          <h3 className="flex text-3xl">
            <img src="../src/assets/plus.svg" className="pr-3 w-7"/>Website Improvements & Redesigns
          </h3>
        <p className="ml-10 mt-2">
          Upgrading existing sites to improve performance, usability, and results.
        </p>
      </li>
      </ul>

        </div>

      </div>

    </section>
  )
}
