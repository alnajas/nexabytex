"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* SECTION FADE / SLIDE */
      sectionsRef.current.forEach((section) => {
        if (!section) return;

        const elements = section.querySelectorAll(
          "h1, h2, h3, p, div"
        );

        gsap.fromTo(
          elements,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
            },
          }
        );
      });

      
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans px-4 py-20">
     
      <section
        ref={(el) => {
          sectionsRef.current[0] = el;
        }}
        className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-24"
      >
        <div className="bg-slate-50/80 backdrop-blur-sm rounded-3xl p-12 md:p-20 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-8">
            About Our Company
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
            We build thoughtful digital products that balance performance,
            aesthetics, and scalability.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
        className="max-w-6xl mx-auto px-8 mb-24"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              What started as curiosity turned into a mission to craft
              high-quality digital experiences.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We believe great software should feel effortless to use and
              powerful under the hood.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Innovation First
            </h3>
            <p className="text-slate-600">
              We constantly evolve with modern tools, frameworks, and ideas.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        ref={(el) => {
          sectionsRef.current[2] = el;
        }}
        className="bg-slate-50 py-20"
      >
        <div className="max-w-4xl mx-auto text-center px-8">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Happy Clients" },
              { value: "5+", label: "Years Experience" },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent mb-2">
                  {item.value}
                </div>
                <p className="text-slate-600 text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
