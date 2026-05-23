import plusImg from '/src/assets/plus.svg'

export default function Stack({ setActiveSection }){
  return (

    <section id="skills" className="bg-slate-950 px-10">
      <h2 className="text-center text-white text-4xl py-10">
        Tech Stack
      </h2>
      <div className="text-white not-prose overflow-auto rounded-lg outline outline-white/5 bg-gray-950 p-8">
        <div className="not-prose overflow-auto rounded-lg outline outline-white/5 bg-zinc-800/50 p-8">
      <ul>
        <li className="mb-10">
          <h3 className="flex text-3xl">
            <img src={plusImg} className="pr-3 w-7"/>Frontend
          </h3>
          <p className="ml-10 mt-2">
            React - TypeScript - JavaScript - HTML5 - CSS3 - Tailwind CSS - Vite
          </p>
        </li>
        <li className="mb-10">
          <h3 className="flex text-3xl">
            <img src={plusImg} className="pr-3 w-7"/>Backend
          </h3>
        <p className="ml-10 mt-2">
          Node.js - Express - MongoDB - REST APIs
        </p>
      </li>
        <li className="mb-10">
          <h3 className="flex text-3xl">
            <img src={plusImg} className="pr-3 w-7"/>Tools
          </h3>
        <p className="ml-10 mt-2">
          Git - GitHub - VS Code - npm - GitHub Pages - Vercel
        </p>
      </li>
        <li className="mb-10">
          <h3 className="flex text-3xl">
            <img src={plusImg} className="pr-3 w-7"/>Concepts
          </h3>
        <p className="ml-10 mt-2">
          Responsive Design - Authentication - RealTime Updates - API Integration </p>
      </li>
      </ul>

        </div>

      </div>

    </section>
  )
}
