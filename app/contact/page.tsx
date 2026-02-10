"use client";
import React from 'react'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function page() {
 
  return (
    <div className="min-h-screen bg-white font-sans px-4 py-20">
    
      <section className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-24">
        <div className="bg-slate-50/80 backdrop-blur-sm  rounded-3xl p-12 md:p-20 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-8 leading-tight">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ready to discuss your project
          </p>
        </div>
      </section>


      <section className="max-w-2xl mx-auto px-8">
        <div className="bg-slate-50/80 backdrop-blur-sm p-12 md:p-16">
         
          
          <form  className="space-y-6">
            <div>
              <label className="block text-slate-900 font-semibold mb-3 text-lg">Full Name</label>
              <input
                type="text"
                name="name"
              
                required
                className="w-full p-4 border-2 border-slate-200 rounded-2xl text-lg focus:border-slate-400 focus:outline-none transition-all"
                placeholder="Your full name"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-900 font-semibold mb-3 text-lg">Email</label>
                <input
                  type="email"
                  name="email"
                  
                  required
                  className="w-full p-4 border-2 border-slate-200 rounded-2xl text-lg focus:border-slate-400 focus:outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-slate-900 font-semibold mb-3 text-lg">Phone</label>
                <input
                  type="tel"
                  name="phone"
                 
                  className="w-full p-4 border-2 border-slate-200 rounded-2xl text-lg focus:border-slate-400 focus:outline-none transition-all"
                  placeholder="+91 1234567890"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-slate-900 font-semibold mb-3 text-lg">Message</label>
              <textarea
                name="message"
                rows={6}
              
                required
                className="w-full p-4 border-2 border-slate-200 rounded-2xl text-lg focus:border-slate-400 focus:outline-none transition-all resize-vertical"
                placeholder="Tell us about your project..."
              />
            </div>
            
            <button
              type="submit"
             
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-2xl text-xl  hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default page
