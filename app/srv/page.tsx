"use client";

import React from 'react'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from 'three';
gsap.registerPlugin(ScrollTrigger);
function page() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const services = [
    {
        id:1,
      title: 'TITLE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore..',
      icon: '',
      features: ['Next.js 15', 'React 18', 'Tailwind CSS', 'SEO Optimized']
    },
    {
        id:2,
      title: 'TITLE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      icon: '',
      features: ['Figma Design', 'Prototyping', 'User Testing', 'Design Systems']
    },
    {
        id:3,
      title: 'TITLE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      icon: '',
      features: ['Full-Stack Development', 'API Integration', 'Database Design', 'Admin Dashboards']
    },
    {
        id:4,
      title: 'TITLE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      icon: '',
      features: ['Booking System', 'User Management', 'Calendar Integration', 'Mobile Responsive']
    },
    {
        id:5,
      title:'TITLE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      icon: '',
      features: ['Real-time Availability', 'Driver Management', 'Payment Integration', 'Admin Panel']
    },
    {
        id:6,
      title: 'TITLE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      icon: '',
      features: ['Code Review', 'Performance Audit', 'Migration Services', 'Ongoing Support']
    }
  ]
 useEffect(()=>{
  sectionsRef.current.forEach((section) => {
        if (!section) return;

        gsap.fromTo(
          section,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 60%",
            },
          }
        );
      });
 },[])
  return (
    <div className="min-h-screen bg-white font-sans px-4 py-20">
    
      <section
      ref={(el) => { (sectionsRef.current[0] = el) }}
      className="max-w-6xl mx-auto mb-24">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-semibold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-8 tracking-tight">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive web development solutions tailored for modern businesses and educational institutions.
          </p>
        </div>

      
        <div className="grid md:grid-cols-3 gap-8 mb-24 text-center">
          <div>
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              ++
            </div>
            <p className="text-2xl text-slate-600 font-semibold">Projects Delivered</p>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              100%
            </div>
            <p className="text-2xl text-slate-600 font-semibold">Client Satisfaction</p>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              ++
            </div>
            <p className="text-2xl text-slate-600 font-semibold">Years Experience</p>
          </div>
        </div>
      </section>

    
      <section className="max-w-6xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-slate-50/80 backdrop-blur-sm border border-slate-200 rounded-3xl p-10 hover:-translate-y-3 transition-all duration-500 group cursor-pointer"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-slate-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-700">
                    <span className="text-slate-400 mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="text-slate-900 font-semibold hover:text-slate-700 transition-colors text-lg flex items-center gap-2 group-hover:translate-x-2 transition-all">
                Learn More <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </section>

    
      
    </div>
  )
}

export default page
