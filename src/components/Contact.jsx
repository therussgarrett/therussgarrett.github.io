export default function Contact({setActiveSection}){
  return (
    <section id="contact" className="text-white px-10">
              <h2 className="text-center text-white text-4xl py-10">Contact</h2>
              <div className="text-white not-prose overflow-auto rounded-lg outline outline-white/5 bg-gray-950 p-8">
                <div className="justify-items-center not-prose overflow-auto rounded-lg outline outline-white/5 bg-zinc-800/50 p-8">
                  <div className="w-auto flex flex-col lg:w-3/6">
              <p className="text-xl">Send me a message via the form below or LinkedIn.</p>
              <form action="https://formsubmit.co/russ@fixwithruss.com" method="POST">
                <input className="w-full shadow-md w-auto p-2 my-1 border-1 border-orange-500 rounded-md" type="text" name="name" placeholder="Your Name" required />
                <input className="w-full shadow-md w-auto p-2 my-1 border-1 border-orange-500 rounded-md" type="email" name="email" placeholder="Your Email" required />
                <textarea className="w-full shadow-md w-auto p-2 my-1 border-1 border-orange-500 rounded-md" name="message" rows="5" placeholder="Your Message" required></textarea>
                <button id="btn" className="text-xl font-medium cursor-pointer py-5 w-full rounded-md" style={{ width: '100%', borderRadius: '6px',
                  backgroundImage: 'repeating-linear-gradient(45deg, rgb(240, 119, 48), rgb(239 104 49) 2px, rgb(243 147 49) 6px, rgb(243 147 49) 6px)' }} type="submit">Send Message</button>
              </form>
              </div>
              </div>
              </div>
    </section>
  )
}
