"use client";
import React from 'react'
import Image from 'next/image'

function page() {
  const portfolioItems = [
    {
      id: 1,
      title: 'title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/portfolio/project1.jpg',
      tech: ['React', 'Next.js', 'Tailwind'],
      live: '#',
      code: '#'
    },
    {
      id: 2,
      title: 'title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      image: '/portfolio/project2.jpg',
      tech: ['React', 'Tailwind', 'Next.js'],
      live: '#',
      code: '#'
    },
    {
      id: 3,
      title: 'title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit.',
      image: '/portfolio/project3.jpg',
      tech: ['Next.js', 'Tailwind', 'React'],
      live: '#',
      code: '#'
    }

  ]

  return (
    <div className="min-h-screen bg-white font-sans px-4 py-20">
    
      <section className="max-w-6xl mx-auto mb-24">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-8 leading-tight">
            Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

      </section>

   
      <section className="max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="bg-slate-50/80 backdrop-blur-sm border border-slate-200 rounded-3xl overflow-hidden hover:-translate-y-4 transition-all duration-500 group cursor-pointer"
            >
            
              <div className="relative h-64 bg-slate-200 overflow-hidden group-hover:scale-110 transition-transform duration-700">
                <Image
                  src={item.image}
                  alt="title"
                  fill
                  className="object-cover"
                />
              </div>

         
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                    title
                  </h3>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

           
                <div className="flex flex-wrap gap-2 mb-8">
                  {item.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="bg-slate-200 text-slate-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

               
                <div className="flex gap-4">
                  <a 
                    href={item.live}
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={item.code}
                    className="flex-1 border-2 border-slate-300 hover:border-slate-400 text-slate-800 font-semibold py-3 px-6 rounded-xl text-center hover:bg-slate-50 transition-all duration-300"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    
    </div>
  )
}

export default page
