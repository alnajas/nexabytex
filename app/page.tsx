"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
const icons = [
  {
    id: 1,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React",
  },
  {
    id: 2,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    name: "Next.js",
  },
  {
    id: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    name: "Tailwind",
  },

  {
    id: 4,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    name: "TypeScript",
  },
  {
    id: 5,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    name: "Node.js",
  },
];


  useEffect(() => {
    let marqueeTween: gsap.core.Tween | null = null;

    const ctx = gsap.context(() => {
    
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.2,
          }
        );
      }

     
      if (trackRef.current) {
        marqueeTween = gsap.to(trackRef.current, {
          xPercent: -50,
          duration: 20,
          ease: "none",
          repeat: -1,
        });
      }

    
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

   
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 75%",
          },
        }
      );
    });

    return () => {
      marqueeTween?.kill();
      ctx.revert();
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-white flex-col font-sans">
      
      <section className="flex flex-col items-center justify-center px-4 py-10">
        <div
          ref={heroRef}
          className="rounded-3xl p-12 md:p-20 max-w-4xl w-full text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-8">
            Welcome NexaByteX
          </h1>
          <p className="text-xl md:text-2xl text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, delectus? Sint fuga, alias placeat hic impedit pariatur officia natus dolore fugit voluptatibus explicabo harum amet? Dolores adipisci accusamus atque architecto!
          </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 relative overflow-hidden group">
                <span>Get Started</span>
                <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
              </button>
              <button className="border-2 border-slate-300 hover:border-slate-400 text-slate-800 font-semibold py-4 px-8 rounded-2xl text-lg hover:bg-slate-50 transition-all duration-300 relative overflow-hidden group">
                <span>View Services</span>
                <div className="absolute inset-0 bg-slate-100/50 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
              </button>
            </div>
        </div>
      </section>

    
      <section className="max-w-screen overflow-hidden py-10">
        <div className="overflow-hidden flex justify-center">
          <div
  ref={trackRef}
  className="flex items-center gap-10 w-max will-change-transform"
>
  {[...icons,...icons].map((icon, index) => (
    <img
      key={`${icon.id}-${index}`}
      src={icon.src}
      alt={icon.name}
      title={icon.name}
      className="w-[120px] object-contain opacity-80 hover:opacity-100 transition"
    />
  ))}
</div>
        </div>
      </section>

    
    <section
        ref={(el) => { (sectionsRef.current[0] = el) }}
        className="py-24 px-6 bg-white"
      >
         <div className="max-w-6xl mx-auto text-center">
           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
           What We Do
          </h2>
          <p className="text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
         </p>

          <div className="grid gap-8 md:grid-cols-3 services-grid">
            {["Web Development", "UI / UX Design", "Performance & SEO"].map(
              (title, i) => (
                <div
                  key={i}
                  className="service-card p-8 rounded-3xl bg-slate-50 hover:shadow-lg transition"
                >
               <h3 className="text-2xl font-semibold mb-4 text-slate-900">
                    {title}
                  </h3>
                  <p className="text-slate-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
            </div>
              )
            )}
          </div>
       </div>

       </section>
       <section
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          className="py-24 px-6 bg-white"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About Us
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
              We're a passionate collective of creators who live and breathe code. 
              From moonlit debugging sessions to dawn-breaking deployments, 
              we build products that don't just work—they inspire.
            </p>
          </div>
        </section>
    <section
   ref={(el) => { (sectionsRef.current[2] = el) }}
        className="py-24 px-6 bg-white"
      >
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




// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";

// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Home() {
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const trackRef = useRef<HTMLDivElement | null>(null);
//   const sectionsRef = useRef<(HTMLElement | null)[]>([]);

//   useEffect(() => {
//     // HERO ANIMATION
//     if (!heroRef.current) return;

//     gsap.fromTo(
//       heroRef.current.children,
//       { opacity: 0, y: 60 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.2,
//         ease: "power3.out",
//         stagger: 0.2,
//       }
//     );
// if (!trackRef.current) return;

//     const tween = gsap.to(trackRef.current, {
//       xPercent: -50,
//       duration: 30,
//       ease: "none",
//       repeat: -1,
//     });

//     const el = trackRef.current;

//     // Pause on hover
//     el.addEventListener("mouseenter", () => tween.pause());
//     el.addEventListener("mouseleave", () => tween.resume());
//     // SCROLL SECTIONS
//     sectionsRef.current.forEach((section) => {
//       gsap.fromTo(
//         section,
//         { opacity: 0, y: 80 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: section,
//             start: "top 60%",
//           },
//         }
//       );
//     });

//     // SERVICE CARDS
//     gsap.fromTo(
//       ".service-card",
//       { opacity: 0, y: 40 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".services-grid",
//           start: "top 75%",
//         },
//       }
//     );
//     return () => {
//       tween.kill();
//     };
//   }, []);

//   return (
//     <div className="flex min-h-screen bg-white flex-col font-sans">
   
//       <section className="flex flex-col items-center justify-center px-4 py-5">
//         <div
//           ref={heroRef}
//           className="rounded-3xl p-12 md:p-20 max-w-4xl w-full text-center"
//         >
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-8 leading-tight">
//             Welcome NexaByteX
//           </h1>
//           <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
//             Building innovative web solutions for modern businesses.
//             Clean, professional, and tailored to your needs.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:-translate-y-1">
//               Get Started
//             </button>
//             <button className="border-2 border-slate-300 hover:border-slate-400 text-slate-800 font-semibold py-4 px-8 rounded-2xl text-lg hover:bg-slate-50 transition-all duration-300">
//               View Services
//             </button>
//           </div>
//         </div>
//       </section>

//      <section>
//       <div className=" flex overflow-hidden" >
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwIy-mzDNwEgiWKpwsy_8CK9KSr6GEnCcpgQ&s" alt="" />
//            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwIy-mzDNwEgiWKpwsy_8CK9KSr6GEnCcpgQ&s" alt="" />
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwIy-mzDNwEgiWKpwsy_8CK9KSr6GEnCcpgQ&s" alt="" />


//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwIy-mzDNwEgiWKpwsy_8CK9KSr6GEnCcpgQ&s" alt="" />
//       </div>
//      </section>
//       <section
//         ref={(el) => { (sectionsRef.current[0] = el) }}
//         className="py-24 px-6 bg-white"
//       >
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//             What We Do
//           </h2>
//           <p className="text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           </p>

//           <div className="grid gap-8 md:grid-cols-3 services-grid">
//             {["Web Development", "UI / UX Design", "Performance & SEO"].map(
//               (title, i) => (
//                 <div
//                   key={i}
//                   className="service-card p-8 rounded-3xl bg-slate-50 hover:shadow-lg transition"
//                 >
//                   <h3 className="text-2xl font-semibold mb-4 text-slate-900">
//                     {title}
//                   </h3>
//                   <p className="text-slate-600">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   </p>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </section>

    
//       <section
//         ref={(el) => { (sectionsRef.current[1] = el) }}
//         className="py-24 px-6"
//       >
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//             About Us
//           </h2>
//           <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquid corporis dolores perferendis incidunt magni, aut voluptas mollitia fuga ipsam, ut corrupti ea possimus tenetur explicabo necessitatibus sint repellendus ipsum!
//           </p>
//         </div>
//       </section>

 
//       <section
//         ref={(el) => { (sectionsRef.current[2] = el) }}
//         className="py-24 px-6 bg-white"
//       >
//         <div className="max-w-4xl mx-auto text-center bg-slate-900 rounded-3xl p-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Ready to Build Something Great?
//           </h2>
//           <p className="text-slate-300 text-lg mb-10">
//             Let’s work together to bring your ideas to life.
//           </p>
//           <button className="bg-white text-slate-900 font-semibold py-4 px-10 rounded-2xl text-lg hover:bg-slate-100 transition">
//             Contact Us
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }
