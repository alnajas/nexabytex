import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-white font-sans px-4 py-20">
    
      <section className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-24">
        <div className="bg-slate-50/80 backdrop-blur-sm rounded-3xl p-12 md:p-20 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-8 leading-tight">
            About Our Company
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

   
      <section className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg text-slate-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
          <div className="bg-slate-50/50 border border-slate-200 rounded-2xl p-8 md:p-12 text-center">
            <div className="text-6xl mb-6"></div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Innovation First</h3>
            <p className="text-slate-600">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </section>

    
      <section className="bg-slate-50/50 py-20">
        <div className="max-w-4xl mx-auto text-center px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent mb-2">+</div>
              <p className="text-slate-600 text-lg">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent mb-2">+</div>
              <p className="text-slate-600 text-lg">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent mb-2">+</div>
              <p className="text-slate-600 text-lg">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

     
    
    </div>
  )
}

export default About
