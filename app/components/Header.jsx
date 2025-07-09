import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div id='header' className='w-full max-w-7xl mx-auto h-screen flex flex-col lg:flex-row items-center justify-center gap-8 px-5 lg:px-8 pt-46 lg:pt-0 relative'>
      {/* Ľavá strana - Texty */}
      <div className='flex-1 text-center lg:text-left relative z-10'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-[50px] font-Outfit font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 bg-clip-text text-transparent leading-tight animate-fade-in'>
          Obchodné priestory na prenájom.
        </h1>
        <p className='max-w-2xl mx-auto lg:mx-0 font-Ovo mb-8 text-gray-600 text-lg leading-relaxed animate-fade-in-delay'>
          V novom meste nad Váhom. Kancelárie, obchody a iné.
        </p>
        <div className='flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-in-delay-2'>
          <a href="#contact" 
             className='px-10 py-3 border border-gray-800 rounded-full bg-gradient-to-r from-gray-900 to-gray-700 text-white flex items-center gap-2 hover:scale-105 hover:shadow-xl transition-all duration-300 font-medium'>
            Kontaktujte nás <Image src={assets.right_arrow_white} alt='' className='w-4 transition-transform group-hover:translate-x-1' />
          </a>
        </div>
      </div>

      {/* Pravá strana - Foto */}
      <div className="flex-1 flex justify-center lg:justify-end relative">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          <Image 
            src={assets.profile_img} 
            alt='' 
            className='relative rounded-2xl w-96 md:w-[28rem] lg:w-[36rem] xl:w-[42rem] shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 border border-gray-100' 
          />
        </div>
      </div>
      
      {/* Dekoratívne elementy */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-gray-400 to-blue-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
    </div>
  )
}

export default Header