'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Footer from '@/app/components/Footer';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const sendToWhatsApp = () => {
    const phoneNumber = '6285813430008'; // Nomor WhatsApp (tanpa +)
    const text = `Halo, saya ${name}. ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <>
    <section className="min-h-screen flex flex-col justify-center items-center text-gray-900 px-6 py-20">
      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl">
        
        {/* Bagian Info */}
        <div className="flex-1">
          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 font-montserrat">
              Let’s Work Together 🚀
            </h1>
            <p className="text-base md:text-lg text-gray-600 font-poppins">
              Punya ide menarik atau ingin membangun project keren?  
              Hubungi saya lewat form di bawah ini!
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-blue-600" />
              <p className="text-gray-500 text-sm md:text-base">
                rajendramahadana7@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={20} className="text-blue-600" />
              <p className="text-gray-500 text-sm md:text-base">
                +62 858 1343 0008
              </p>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-blue-600" />
              <p className="text-gray-500 text-sm md:text-base">
                Depok, Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Form Contact */}
        <div className="flex-1 p-6 rounded-xl shadow-md">
          <div className="mb-4">
            <label className="block mb-2 font-medium font-montserrat">Nama</label>
            <input
              type="text"
              placeholder="Masukkan nama kamu"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow-[inset_3px_0_0_0_blue] pl-5 bg-gray-200 pr-4 py-2 text-sm rounded-md placeholder:text-sm focus:outline-none focus:ring-0 w-full"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium font-montserrat">Pesan</label>
            <textarea
              placeholder="Tulis pesan kamu..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="shadow-[inset_3px_0_0_0_blue] pl-5 bg-gray-200 pr-4 pt-4 pb-20 text-sm rounded-md placeholder:text-sm focus:outline-none focus:ring-0 w-full"
            />
          </div>

          <button
            onClick={sendToWhatsApp}
            className="flex items-center justify-center gap-2 bg-gray-800 text-white shadow font-montserrat px-6 py-3 rounded-lg font-medium transition w-full hover:bg-gray-700"
          >
            <Send size={18} /> Kirim via WhatsApp
          </button>
        </div>
      </div>
    </section>

    <section>
                <Footer></Footer>
            </section>
            </>
  );
}
