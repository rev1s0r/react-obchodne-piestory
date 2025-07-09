'use client'
import React from 'react'
import ContactForm from './ContactForm'
import { assets } from '@/assets/assets' 

const Contact = () => {
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:100%_100%] bg-fixed'>
      <h2 className='text-center text-5xl font-Ovo'>
        Spojte sa s nami
      </h2>
      
      <p className='text-center max-w-2xl mx-auto mt-12 mb-12 font-Ovo'>
        Môžete nám napísať alebo zatelefonovat. Radi vám poskytneme viac informácií o našich obchodných priestoroch a odpovieme na vaše otázky.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
        {/* Contact Information */}
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Kontaktné informácie</h3>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-black/80 text-white rounded-full p-3 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Adresa</h4>
                  <p>Hurbanova 760/17</p>
                  <p>Nové Mesto nad Váhom</p>
                  <p>915 01</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-black/80 text-white rounded-full p-3 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Telefón</h4>
                  <a href="tel:+421904352987" className="hover:text-black transition-colors">
                    +421 904 352 987
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-black/80 text-white rounded-full p-3 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <a href="mailto:info@obchodnepriestory.sk" className="text-xs md:text-base hover:text-black transition-colors">
                    info(zavinac) obchodnepriestory.sk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact

