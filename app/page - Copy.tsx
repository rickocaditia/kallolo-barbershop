import React from 'react';
import { Scissors, MapPin, Phone, Instagram, Clock } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <Scissors className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tighter">KALLOLO</span>
            </div>
            <div className="hidden md:flex space-x-8 font-medium">
              <a href="#home" className="hover:text-red-600 transition">Home</a>
              <a href="#services" className="hover:text-red-600 transition">Services</a>
              <a href="#contact" className="hover:text-red-600 transition">Contact</a>
            </div>
            <a 
              href="https://wa.me/6285714060750" 
              className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700 transition"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-bold">
              EST 2024
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Tampil Berwibawa di <span className="text-red-600">Kallolo Barbershop.</span>
            </h1>
            <p className="text-zinc-600 text-lg max-w-lg">
              Potong rambut profesional dengan harga terjangkau. Kami memastikan setiap pelanggan pulang dengan kepercayaan diri maksimal.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-white p-4 rounded-2xl shadow-sm border border-zinc-100">
                <span className="text-3xl font-bold text-red-600">35K</span>
                <span className="text-sm text-zinc-500 leading-none">Starting<br/>Price</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-full aspect-square bg-zinc-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
               {/* Gunakan gambar image_3ba732.jpg sebagai referensi visual di sini */}
               <img 
                src="/api/placeholder/600/600" 
                alt="Kallolo Barbershop Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden lg:block">
               <div className="flex items-center gap-4">
                  <div className="bg-red-600 p-3 rounded-xl text-white">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Buka Setiap Hari</p>
                    <p className="font-bold">10:00 - 21:00 WIB</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Layanan Unggulan Kami</h2>
            <div className="h-1 w-20 bg-red-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Haircut & Styling', desc: 'Potongan rambut modern sesuai bentuk wajah.' },
              { title: 'Shaving', desc: 'Cukur jenggot & kumis dengan handuk hangat.' },
              { title: 'Hair Treatment', desc: 'Perawatan rambut dan kulit kepala agar tetap sehat.' }
            ].map((service, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-zinc-800 hover:border-red-600 transition group">
                <h3 className="text-xl font-bold mb-4 group-hover:text-red-500 transition">{service.title}</h3>
                <p className="text-zinc-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    {/* Customer Satisfaction Section */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
      <div className="max-w-2xl">
        <h2 className="text-red-600 font-bold tracking-wider mb-3 uppercase text-sm">Testimonials</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight">
          Apa Kata Mereka Tentang <br/> Layanan Kami?
        </h3>
      </div>
      <div className="hidden md:block">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-zinc-200 overflow-hidden">
                <img src={`/api/placeholder/100/100`} alt="User avatar" />
              </div>
            ))}
          </div>
          <div className="ml-4">
            <p className="font-bold text-zinc-900">500+ Pelanggan Puas</p>
            <p className="text-zinc-500 text-sm italic">"Hasil cukur rapi & mantap!"</p>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { 
          name: "Budi Santoso", 
          role: "Pelanggan Tetap", 
          comment: "Baru pertama kali ke sini tapi langsung cocok. Barbersnya ramah dan detail banget ngerjainnya. Mantap Kallolo!",
          rating: 5
        },
        { 
          name: "Andi Wijaya", 
          role: "Wiraswasta", 
          comment: "Tempatnya nyaman dan harganya sangat terjangkau untuk hasil sekelas barbershop premium. Sangat direkomendasikan!",
          rating: 5
        },
        { 
          name: "Rian Pratama", 
          role: "Mahasiswa", 
          comment: "Gak perlu antre lama kalau booking lewat WA dulu. Potongannya rapi, sesuai banget sama referensi foto yang saya kasih.",
          rating: 5
        }
      ].map((testimonial, idx) => (
        <div key={idx} className="p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300">
          <div className="flex gap-1 mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-zinc-700 leading-relaxed mb-8 italic">"{testimonial.comment}"</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg">
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-zinc-900">{testimonial.name}</p>
              <p className="text-sm text-zinc-500">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Contact & Map */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-zinc-100 overflow-hidden flex flex-col md:flex-row">
            <div className="p-10 md:p-16 flex-1">
              <h2 className="text-3xl font-bold mb-8">Kunjungi Kami</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-red-600 shrink-0" />
                  <p className="text-zinc-600">Lokasi strategis (Lihat di Google Maps untuk navigasi tepatnya).</p>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-red-600 shrink-0" />
                  <div>
                    <p className="text-zinc-600">0857-1406-0750</p>
                    <p className="text-zinc-600">0812-4188-2705</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <a 
                  href="https://maps.app.goo.gl/jy1ZtyecaCJbFBY28"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-zinc-800 transition"
                >
                  Buka Google Maps
                </a>
              </div>
            </div>
            <div className="flex-1 min-h-[400px] bg-zinc-200">
               {/* Embed Google Maps Iframe di sini */}
               <div className="w-full h-full flex items-center justify-center text-zinc-400 italic">
                  Peta Lokasi Kallolo Barbershop
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-zinc-200 text-center">
        <p className="text-zinc-500 text-sm">
          © 2026 Kallolo Barbershop. Crafted with Professionalism.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;