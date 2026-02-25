"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const threeRef = useRef<HTMLDivElement | null>(null);

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
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let renderer: THREE.WebGLRenderer | null = null;
    let animationId: number | null = null;
    let particles: THREE.Points | null = null;
    let geometry: THREE.BufferGeometry | null = null;
    let material: THREE.PointsMaterial | null = null;

    // ================= GSAP =================
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
          duration: 30,
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

    // ================= THREE =================
    if (threeRef.current) {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      threeRef.current.appendChild(renderer.domElement);

      geometry = new THREE.BufferGeometry();
      const vertices: number[] = [];

      for (let i = 0; i < 2000; i++) {
        vertices.push(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        );
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );

      material = new THREE.PointsMaterial({
  size: 0.08,
  color: 0x9ca3af
});

      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      const animate = () => {
        animationId = requestAnimationFrame(animate);

        if (particles) {
          particles.rotation.x += 0.0008;
          particles.rotation.y += 0.001;
        }

        renderer?.render(scene!, camera!);
      };

      animate();
      const handleResize = () => {
        if (!camera || !renderer) return;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", handleResize);
    }

    return () => {
      marqueeTween?.kill();
      ctx.revert();

      if (animationId) cancelAnimationFrame(animationId);

      if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      }

      geometry?.dispose();
      material?.dispose();

      scene = null;
      camera = null;
      particles = null;
    };
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="relative z-10 flex min-h-screen bg-white flex-col font-sans">
      {/* Three.js Background */}
      <div ref={threeRef} className="fixed inset-0 z-5 pointer-events-none" />
      
      <section className="flex flex-col items-center justify-center px-4 py-10">
        <div
          ref={heroRef}
          className="rounded-3xl p-12 md:p-20 max-w-4xl w-full text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-8 tracking-tight">
            NexaByteX
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
  className="flex items-center gap-15 w-max will-change-transform"
>
  {[...icons,...icons,...icons].map((icon, index) => (
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
        ref={(el) => { sectionsRef.current[0] = el }}
        className="py-24 px-6 bg-white"
      >
         <div className="max-w-6xl mx-auto text-center">
           <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
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
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
              About Us
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis similique voluptatum itaque vitae nostrum, quasi velit non amet atque molestias tempora dignissimos ipsam eius! Reiciendis minus voluptatibus placeat fugit quibusdam!
            </p>
          </div>
        </section>

    <section
   ref={(el) => { sectionsRef.current[2] = el }}
        className="py-24 px-6 bg-white"
      >
     <div className="max-w-4xl mx-auto text-center bg-slate-900 rounded-3xl p-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
                       Ready to Build Something Great?
          </h2>
        <p className="text-slate-300 text-lg mb-10">
          Let’s work together to bring your ideas to life.
          </p>
           <Link href={'/contact'}>
           <button  className="bg-white text-slate-900 font-semibold py-4 px-10 rounded-2xl text-lg hover:bg-slate-100 transition">
            Contact Us
                       </button>
           </Link>
        </div>
       </section>
    </div>
  )
}


