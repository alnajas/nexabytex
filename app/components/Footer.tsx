import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent mb-4">
              NexaByteX
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
             Lorem ipsum dolor, sit amet elit. Id, cumquetates quam enim debitis denecessitatibus aperiam?
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="text-xl"><FaLinkedin /></span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="text-xl"><FaInstagram /></span>
              </a>
             
              
            </div>
          </div>

        
          <div>
            <h4 className="text-lg font-semibold text-slate-200 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-slate-400 hover:text-white transition-colors block py-1">Home</a></li>
              <li><a href="/about" className="text-slate-400 hover:text-white transition-colors block py-1">About</a></li>
              <li><a href="/services" className="text-slate-400 hover:text-white transition-colors block py-1">Services</a></li>
              <li><a href="/blogs" className="text-slate-400 hover:text-white transition-colors block py-1">Blogs</a></li>
              <li><a href="/portfolio" className="text-slate-400 hover:text-white transition-colors block py-1">Portfolio</a></li>
              <li><a href="/contact" className="text-slate-400 hover:text-white transition-colors block py-1">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-200 mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors block py-1">Web Development</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors block py-1">React Apps</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors block py-1">UI/UX Design</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors block py-1">Consulting</a></li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-lg font-semibold text-slate-200 mb-4">Stay Updated</h4>
            <p className="text-slate-400 mb-4 text-sm">Get the latest updates and offers</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-all"
              />
              <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded-xl transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; 2026 Your Company. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
