import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white flex-col  font-sans">
      
  
      <section className="flex flex-col items-center justify-center px-4 py-5">
        <div className="bg-slate-50/80 backdrop-blur-sm rounded-3xl p-12 md:p-20 max-w-4xl w-full text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-8 leading-tight">
            Welcome NexaByteX
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
            Building innovative web solutions for modern businesses.  
            Clean, professional, and tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:-translate-y-1">
              Get Started
            </button>
            <button className="border-2 border-slate-300 hover:border-slate-400 text-slate-800 font-semibold py-4 px-8 rounded-2xl text-lg hover:bg-slate-50 transition-all duration-300">
              View Services
            </button>
          </div>
        </div>
      </section>

  
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What We Do
          </h2>
          <p className="text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, unde perspiciatis provident quam molestiae laudantium beatae dicta perferendis praesentium ab eius animi dolores sit, architecto nobis amet porro? Libero, necessitatibus.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-8 rounded-3xl bg-slate-50 hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">
                Web Development
              </h3>
              <p className="text-slate-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa numquam 
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">
                UI / UX Design
              </h3>
              <p className="text-slate-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa numquam 
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">
                Performance & SEO
              </h3>
              <p className="text-slate-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa numquam 
                </p>
            </div>
          </div>
        </div>
      </section>

  
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Us
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
            We’re a team of passionate developers and designers focused on building
            digital products that actually make an impact.  
            From startups to established companies, we craft solutions that scale.
          </p>
        </div>
      </section>

     
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center bg-slate-900 rounded-3xl p-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-slate-300 text-lg mb-10">
            Let’s work together to bring your ideas to life.
          </p>
          <button className="bg-white text-slate-900 font-semibold py-4 px-10 rounded-2xl text-lg hover:bg-slate-100 transition">
            Contact Us
          </button>
        </div>
      </section>

     

    </div>
  );
}
