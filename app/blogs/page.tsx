"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Page() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const blogs = [
    {
      id: 1,
      title: "TITLE 1",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      image: "/placeholder.jpg",
      date: "Feb 08, 2026",
      category: "Next.js",
    },
    {
      id: 2,
      title: "TITLE 2",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
      image: "/placeholder.jpg",
      date: "Feb 05, 2026",
      category: "Tailwind",
    },
    {
      id: 3,
      title: "TITLE 3",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Campus event management solution.",
      image: "/placeholder.jpg",
      date: "Jan 30, 2026",
      category: "Angular",
    },
    {
      id: 4,
      title: "TITLE 4",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Campus event management solution.",
      image: "/placeholder.jpg",
      date: "Jan 25, 2026",
      category: "React",
    },
  ];

  useEffect(() => {
    if (!trackRef.current) return;

    const tween = gsap.to(trackRef.current, {
      xPercent: -50,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    const el = trackRef.current;

    // Pause on hover
    el.addEventListener("mouseenter", () => tween.pause());
    el.addEventListener("mouseleave", () => tween.resume());

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans px-4 py-20">
  
      <section className="max-w-6xl mx-auto mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-8">
          Blogs
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
          Latest articles and showcase of our recent work
        </p>
      </section>

   
      <section className="max-w-10xl mx-auto mb-24 overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-20">
          Recent Blogs
        </h2>

        <div className="overflow-hidden">
         
          <div
            ref={trackRef}
            className="flex gap-8 w-max will-change-transform"
          >
            {[...blogs, ...blogs].map((blog, index) => (
              <article
                key={`${blog.id}-${index}`}
                className="group w-[320px] md:w-[380px] flex-shrink-0"
              >
                <div className="relative h-64 rounded-3xl overflow-hidden bg-slate-200 mb-6">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-900/90 text-white px-3 py-1 rounded-xl text-sm backdrop-blur-sm">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="text-sm text-slate-500 mb-2">
                  {blog.date}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>

                <a className="text-slate-900 font-semibold flex items-center gap-2 hover:text-slate-700 transition-colors">
                  Read More <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
