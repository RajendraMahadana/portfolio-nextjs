"use client"

import Link from "next/link";

export default function Footer() {

    const socialLinks = [
    { name: "Instagram", icon: "ri-instagram-line", href: "https://instagram.com" },
    { name: "Github", icon: "ri-github-line", href: "https://github.com/RajendraMahadana" },
   
  ];
    return (
        <>
        <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Grid Utama */}
    <div className="grid grid-cols-1 md:flex md:justify-between gap-10">

      {/* Kolom 1 - Brand */}
      <div>
        <h1 className="text-2xl font-montserrat text-white">Rmwd</h1>
        <p className="mt-2 text-sm font-montserrat">
          Membangun website modern, responsif, dan bermanfaat.
        </p>
      </div>

        <div className="flex gap-20">

        
      {/* Kolom 2 - Navigasi */}
      <div>
        <h2 className=" font-medium font-montserrat mb-2">Navigasi</h2>
        <ul className="space-y-2 text-xs font-montserrat">
          <li><Link href="/portofolio" className="hover:text-white transition">Home</Link></li>
          <li><Link href="/portofolio/about" className="hover:text-white transition">About</Link></li>
          <li><Link href="/portofolio/project" className="hover:text-white transition">Portfolio</Link></li>
          <li><Link href="/portofolio/contact" className="hover:text-white transition">Contact</Link></li>
        </ul>
      </div>

      {/* Kolom 3 - Social Links */}
      <div>
        <h2 className=" font-medium font-montserrat mb-2">Ikuti Saya</h2>
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <Link key={index} href={social.href} target="_blank">
              <i
                className={`${social.icon} text-xl hover:text-blue-600 rounded-lg transition-colors`}
              ></i>
            </Link>
          ))}
        </div>
      </div>

      </div>
    </div>

    {/* Garis */}
    <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
      © {new Date().getFullYear()} Rajendra Mahadana. All rights reserved.
    </div>
  </div>
</footer>

        </>
    )
}