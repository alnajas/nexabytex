'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

   
          <Link href="/" className="text-2xl font-semibold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            NexaByte<span className='text-2xl'>X</span>
          </Link>

     
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-black">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-black">
              Services
            </Link>
             <Link href="/blog" className="text-gray-700 hover:text-black">
             Blog
            </Link>
             <Link href="/portfolio" className="text-gray-700 hover:text-black">
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-black">
              Contact
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 text-xl"
          >
            ☰
          </button>
        </div>
      </div>

   
      {open && (
        <div className="md:hidden px-4 pb-4">
          <Link href="/" className="block py-2 text-gray-700 hover:text-black">
            Home
          </Link>
          <Link href="/about" className="block py-2 text-gray-700 hover:text-black">
            About
          </Link>
          <Link href="/services" className="block py-2 text-gray-700 hover:text-black">
            Services
          </Link>
          <Link href="/contact" className="block py-2 text-gray-700 hover:text-black">
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}
