"use client";
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function PortfolioPage() {
  const heroRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const featuredRef = useRef<HTMLDivElement | null>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const ctx = useRef<gsap.Context | null>(null) 

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

  useEffect(() => {
    ctx.current = gsap.context(() => {
      // Hero title
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        )
      }

      // Featured animation
      ScrollTrigger.create({
        trigger: featuredRef.current,
        start: "top 90%",
        onEnter: () => {
          if (featuredRef.current) {
            gsap.fromTo(
              featuredRef.current,
              { scale: 0.8, opacity: 0, rotationY: -30 },
              { scale: 1, opacity: 1, rotationY: 0, duration: 1.5, ease: "back.out(2)" }
            )
          }
        }
      })

      // Cards animation
      ScrollTrigger.create({
        trigger: ".portfolio-grid",
        start: "top 85%",
        onEnter: () => {
          if (cardsRef.current.length === 3 && cardsRef.current.every(card => card)) {
            gsap.fromTo(
              cardsRef.current,
              { opacity: 0, y: 50, scale: 0.95 },
              { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.7)" }
            )
          }
        }
      })
    }, heroRef)

    return () => ctx.current?.revert()
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans px-4 py-20" ref={heroRef}>
      <section className="max-w-6xl mx-auto mb-24">
        <div className="text-center mb-24">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-semibold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-8 tracking-tight">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Showcase of our best web development projects built with modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24 text-center bg-slate-50/80 backdrop-blur-sm p-12">
          <div>
            <div className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              +
            </div>
            <p className="text-2xl text-slate-600 font-semibold">Live Projects</p>
          </div>
          <div>
            <div className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              +
            </div>
            <p className="text-2xl text-slate-600 font-semibold">Client Projects</p>
          </div>
          <div>
            <div className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              100%
            </div>
            <p className="text-2xl text-slate-600 font-semibold">On-Time Delivery</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div ref={featuredRef} className="bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto relative group">
         
          <div className="relative h-80 lg:h-96 bg-gradient-to-br from-slate-100 overflow-hidden group-hover:scale-105 transition-transform duration-700">
            <Image src="/blog/featured.jpg" alt="Featured Post" fill className="object-cover" />
          </div>
          <div className="p-10 lg:p-12">
            <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
              <span>Feb 10, 2026 </span>
              <span className="bg-slate-100 px-3 py-1 rounded-full text-xs font-medium">Development</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Building NexaByteX: Next.js 15 
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellat suscipit quisquam pariatur praesentium voluptatum voluptatem maxime? Fugiat cumque temporibus optio dolor, ab, magnam, eum nam veritatis excepturi minus non.            </p>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 font-semibold text-lg">NexaByteX Team</span>
              <a href="#" className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all hover:-translate-y-1">
                Read Article →
              </a>
            </div>
          </div>
        </div>
      </section>
     
      <section className="max-w-7xl mx-auto mb-24 py-24 px-6">
        <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id}
              ref={el => {cardsRef.current[index] = el}}
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
                  <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
                    {item.title}
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
