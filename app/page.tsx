"use client";

import React, { useState, useEffect } from 'react';
import { Scissors, MapPin, Phone, Clock, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// const sections = ['home', 'services', 'testimonials', 'social', 'contact'];



const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Logika untuk mendeteksi section yang sedang dilihat saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  // Komponen NavLink Custom dengan Garis Merah
  const NavLink = ({ href, label, id }: { href: string; label: string; id: string }) => (
    <a href={href} className="relative py-2 group transition-colors hover:text-red-600 font-medium text-zinc-600">
      {label}
      {activeSection === id && (
        <motion.div 
          layoutId="activeNav"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600 rounded-full"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </a>
  );

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 overflow-x-hidden">
      {/* Navbar Updated */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center gap-2">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <Scissors className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tighter text-red-600 uppercase">KALLOLO</span>
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              <NavLink href="#home" label="Home" id="home" />
              <NavLink href="#services" label="Services" id="services" />
              <NavLink href="#testimonials" label="Testimonials" id="testimonials" />
              <NavLink href="#social" label="Social" id="social" /> {/* MENU BARU */}
              <NavLink href="#contact" label="Contact" id="contact" />
            </div>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/6285714060750" 
              className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition shadow-lg shadow-red-600/20"
            >
              Book Now
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-48 pb-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="flex-1 space-y-6 text-center md:text-left">
            <motion.div variants={fadeIn} className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
              EST 2024
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Tampil Berwibawa di <br/>
              <span className="text-red-600 drop-shadow-sm">Kallolo Barbershop.</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-zinc-600 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
              Potong rambut profesional dengan harga terjangkau. Kami memastikan setiap pelanggan pulang dengan kepercayaan diri maksimal.
            </motion.p>
            <motion.div variants={fadeIn} className="flex justify-center md:justify-start flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-100">
                <span className="text-3xl font-black text-red-600">35K</span>
                <div className="h-8 w-px bg-zinc-200"></div>
                <span className="text-xs text-zinc-500 font-bold uppercase tracking-tighter">Mulai Dari<br/>Harga Flat</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex-1 relative">
            <div className="w-full aspect-[4/5] bg-zinc-200 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2">
              <img src="/hero-kallolo.jpg" alt="Kallolo Barbershop Hero" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1 }} className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl border border-zinc-50 hidden lg:block">
               <div className="flex items-center gap-4">
                  <div className="bg-red-600 p-4 rounded-2xl text-white animate-pulse">
                    <Clock size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">Jam Operasional</p>
                    <p className="font-black text-xl text-zinc-900 font-mono">10:00 - 21:00</p>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase italic">Layanan Unggulan</h2>
            <div className="h-1.5 w-24 bg-red-600 mx-auto rounded-full"></div>
          </motion.div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Haircut & Styling', desc: 'Potongan rambut modern sesuai bentuk wajah dan keinginan Anda.' },
              { title: 'Shaving', desc: 'Cukur jenggot & kumis dengan teknik tradisional dan handuk hangat.' },
              { title: 'Hair Treatment', desc: 'Perawatan rambut agar tetap sehat, kuat, dan terlihat segar.' }
            ].map((service, idx) => (
              <motion.div key={idx} variants={fadeIn} whileHover={{ y: -10 }} className="p-10 rounded-[2.5rem] bg-zinc-900 border border-zinc-800 hover:border-red-600 transition-all group">
                <div className="w-14 h-14 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Scissors size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     {/* Testimonials */}
<section id="testimonials" className="py-32 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
      
      {/* Teks Header dengan Animasi Hover */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }} 
        whileHover={{ x: 10 }} // Bergerak sedikit ke kanan saat hover
        transition={{ type: "spring", stiffness: 300 }}
        className="max-w-2xl cursor-default group"
      >
        <span className="text-red-600 font-black tracking-[0.2em] mb-4 block uppercase text-sm italic underline decoration-4 underline-offset-8 group-hover:text-zinc-950 transition-colors">
          Testimonials
        </span>
        <h3 className="text-4xl md:text-6xl font-black text-zinc-900 leading-[1.1] group-hover:text-red-600 transition-colors">
          Apa Kata Pelanggan <br/> Setia Kami?
        </h3>
      </motion.div>

      {/* Kotak Social Proof dengan Animasi Hover (Sesuai panah di gambar Ayah) */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }}
        whileHover={{ 
          scale: 1.05, 
          rotate: [-1, 1, 0], // Efek sedikit bergoyang
          y: -5 
        }}
        className="hidden md:block pb-2 cursor-pointer"
      >
        <div className="flex items-center gap-4 bg-white p-6 rounded-3xl border border-zinc-200 shadow-xl shadow-red-600/5 hover:border-red-600/30 transition-all">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }} // Avatar naik satu per satu saat hover
                className="w-14 h-14 rounded-full border-4 border-white bg-zinc-300 overflow-hidden shadow-lg flex items-center justify-center text-[10px] font-bold text-zinc-500 uppercase"
              >
                User
              </motion.div>
            ))}
          </div>
          <div>
            <p className="font-black text-2xl text-zinc-900 italic leading-none">500+</p>
            <p className="text-xs text-red-600 font-bold uppercase tracking-widest mt-1">Puas & Kembali lagi</p>
          </div>
        </div>
      </motion.div>
    </div>

          {/* Grid Testimoni dengan Efek Gerakan */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {[
    { name: "Budi Santoso", role: "Pelanggan Tetap", comment: "Baru pertama kali ke sini tapi langsung cocok. Barbersnya ramah dan detail banget ngerjainnya. Mantap Kallolo!" },
    { name: "Andi Wijaya", role: "Wiraswasta", comment: "Tempatnya nyaman dan harganya sangat terjangkau untuk hasil sekelas barbershop premium. Sangat direkomendasikan!" },
    { name: "Rian Pratama", role: "Mahasiswa", comment: "Gak perlu antre lama kalau booking lewat WA dulu. Potongannya rapi, sesuai banget sama referensi foto yang saya kasih." }
  ].map((testimonial, idx) => (
    <motion.div 
      key={idx} 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ delay: idx * 0.1 }}
      
      // EFEK GERAKAN SAAT MOUSE DI ATAS KARTU
      whileHover={{ 
        y: -15, 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="p-10 rounded-[3rem] bg-zinc-50 border border-zinc-200/50 hover:border-red-600/20 hover:shadow-2xl hover:shadow-red-600/10 transition-all group relative cursor-default"
    >
      <div className="flex gap-1 mb-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300 origin-left">
        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
      </div>
      
      <p className="text-zinc-700 leading-relaxed mb-10 text-lg font-medium group-hover:text-zinc-900 transition-colors">
        "{testimonial.comment}"
      </p>
      
      <div className="flex items-center gap-4">
        {/* Avatar yang berputar sedikit saat kartu di-hover */}
        <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-600/30 transform -rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-black text-zinc-900 uppercase tracking-tighter text-lg leading-tight group-hover:text-red-600 transition-colors">
            {testimonial.name}
          </p>
          <p className="text-sm text-red-600 font-bold opacity-80">{testimonial.role}</p>
        </div>
      </div>

      {/* Dekorasi halus yang muncul saat hover */}
      <div className="absolute bottom-6 right-10 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
         <Scissors size={40} className="text-red-600 -rotate-12" />
      </div>
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 bg-zinc-50">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[4rem] shadow-2xl shadow-zinc-300/40 border border-white overflow-hidden flex flex-col md:flex-row">
            <div className="p-12 md:p-20 flex-1 bg-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-red-600/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <h2 className="text-4xl font-black mb-12 relative z-10 leading-tight">Mampir & <br/><span className="text-red-600">Upgrade Penampilanmu.</span></h2>
              <div className="space-y-8 relative z-10">
                <div className="flex gap-6 items-start group">
                  <div className="p-4 bg-zinc-50 rounded-2xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all"><MapPin size={24} /></div>
                  <p className="text-zinc-600 font-medium pt-2">Kallolo Barbershop - Lokasi strategis, mudah ditemukan.</p>
                </div>
                <div className="flex gap-6 items-start group">
                  <div className="p-4 bg-zinc-50 rounded-2xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all"><Phone size={24} /></div>
                  <div>
                    
                    <p className="text-zinc-900 font-black text-xl mb-1 tracking-tight">0812-4188-2705</p>
                    <p className="text-zinc-500 font-bold uppercase text-xs tracking-widest">Klik untuk Chat WhatsApp</p>
                  </div>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-14">
                <a href="https://maps.app.goo.gl/jy1ZtyecaCJbFBY28" target="_blank" className="inline-flex items-center gap-3 bg-zinc-950 text-white px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-red-600 transition-all shadow-xl shadow-zinc-950/20">Buka Peta Lokasi</a>
              </motion.div>
            </div>
            
            <div className="flex-1 min-h-[500px] relative group overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.474665494498!2d106.9424915!3d-6.3325178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699256972410a5%3A0xc367094b8efc0f4!2sKallolo%20Barbershop!5e0!3m2!1sid!2sid!4v1715600000000!5m2!1sid!2sid"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </section>

{/* Social Media Gallery Section */}
<section id="social" className="py-32 bg-zinc-950 text-white overflow-hidden relative">
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/10 blur-[100px] rounded-full -translate-x-1/2"></div>
  
  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <div className="text-center mb-20">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-red-600 font-black tracking-[0.3em] uppercase text-sm"
      >
        Follow the Vibe
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-black mt-4 italic"
      >
        IKUTI GAYA KAMI
      </motion.h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Instagram Card */}
      <motion.a
  href="https://www.instagram.com/barbershop.kallolo/" 
  target="_blank"
  whileHover={{ y: -10, scale: 1.02 }}
  className="group relative p-10 rounded-[3rem] bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-orange-600/20 border border-white/10 overflow-hidden"
>
  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
    
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  </div>
  <div className="relative z-10">
    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
      
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    </div>
    <h3 className="text-3xl font-black mb-2">Instagram</h3>
    <p className="text-zinc-400 mb-8">Lihat portofolio potongan rambut terbaru & testimoni pelanggan kami.</p>
    <span className="inline-flex items-center gap-2 font-bold text-red-500 group-hover:text-white transition-colors">
      @kallolobarber <div className="w-8 h-0.5 bg-red-600"></div>
    </span>
  </div>
</motion.a>

      {/* TikTok Card */}
      <motion.a
        href="https://www.tiktok.com/@kallolo.barbershop" // Ganti link TikTok Ayah
        target="_blank"
        whileHover={{ y: -10, scale: 1.02 }}
        className="group relative p-10 rounded-[3rem] bg-zinc-900 border border-white/10 overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-cyan-400">
           <svg viewBox="0 0 24 24" width="120" height="120" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.53 1.13-.3 2.13-1.21 2.38-2.35.16-.81.06-1.64.07-2.46V.02z"/></svg>
        </div>
        <div className="relative z-10">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
             <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-white"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.53 1.13-.3 2.13-1.21 2.38-2.35.16-.81.06-1.64.07-2.46V.02z"/></svg>
          </div>
          <h3 className="text-3xl font-black mb-2 text-cyan-400">TikTok</h3>
          <p className="text-zinc-400 mb-8">Video sinematik proses cukur dan tips perawatan rambut pria.</p>
          <span className="inline-flex items-center gap-2 font-bold text-red-500 group-hover:text-white transition-colors">
            @kallolo.tiktok <div className="w-8 h-0.5 bg-red-600"></div>
          </span>
        </div>
      </motion.a>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="py-16 bg-zinc-950 text-white border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-8 opacity-50">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center scale-75">
              <Scissors className="text-white w-4 h-4" />
            </div>
            <span className="font-black text-sm tracking-widest uppercase">KALLOLO</span>
          </div>
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.4em] mb-4">© 2026 Kallolo Barbershop. All Rights Reserved.</p>
          <p className="text-zinc-700 text-[10px] font-medium tracking-widest uppercase italic">Developed with Professionalism by Rico Aditia</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;