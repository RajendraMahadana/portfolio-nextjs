"use client"

import Image  from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import Typed from "typed.js";
import Skill from "../components/Skill";
import Footer from "../components/Footer";

export default function Portofolio() {
    const el = useRef<HTMLSpanElement>(null);

     useEffect(() => {
    const typed = new Typed(el.current!, {
      strings: [
        "Programmer", 
        "UI/UX Designer", 
        "Frontend Development", 
        "Backend Development", 
        "Web Developer"
    ],
      typeSpeed: 100,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

   const socialLinks = [
    { name: "Instagram", icon: "ri-instagram-line", href: "https://instagram.com" },
    { name: "Github", icon: "ri-github-line", href: "https://github.com/RajendraMahadana" },
   
  ];

    return(
        <>
        <section className=" h-full flex gap-5 flex-col md:h-min-[100vh] p-30 justify-center">
            <div className="flex flex-col md:flex-row  justify-between items-center">



            <div className="font-poppins flex flex-col space-y-8">
                <div>
                    <h1 className="font-medium text-2xl">Hi, saya</h1>
                    <h1 className="text-5xl font-montserrat font-semibold mb-2"><span className="text-blue-600"> Rajendra Mahadana </span> <br /> Wira Desvana</h1>
                    <span ref={el} className="auto-type text-blue-600 font-bold"></span>
                </div>
                <div className="h-[.9] w-1/2 bg-black"></div>
                <p className="font-montserrat text-2xl font-medium">Saya suka mengubah ide <br /> menjadi produk digital yang <br /> indah, fungsional, dan bermanfaat.</p>
            </div>

            <div className="p-4 shadow-md rounded-xl">
                <Image className="rounded-xl"
                    src="/images/profile.png" 
                    alt="Foto profil" 
                    width={200} 
                    height={200} 
                />

            </div>

            <div className="flex flex-col space-y-5 justify-center">

                <div>
                    <h1 className="font-montserrat text-xl font-semibold">Ada sesuatu yang ingin dibicarakan? <br /> <span className="text-blue-600"> Saya siap mendengarkan.</span> </h1>
                </div>
                
                <div className="flex items-center gap-2">

                <div>
                <Link href="/portofolio/contact">
                    <button className="px-8 py-3 bg-gray-800 rounded-lg font-montserrat tex-xl text-white">Contact Me</button>
                </Link>
                </div>

                <div className="flex gap-2">
                    {socialLinks.map((social, index) => (
                        <Link key={index} href={social.href} target="_blank">
                        <i className={`${social.icon} text-2xl hover:text-blue-600 p-3 bg-gray-800 text-white rounded-lg transition-colors`}></i>
                        </Link>
                    ))}
                </div>
                </div>

                <div>

                </div>
            </div>

            </div>
        </section>

        <section>
            <Skill></Skill>
        </section>

        <section>
            <Footer></Footer>
        </section>
        </>
    )
}