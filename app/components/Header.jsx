'use client'
import React, { useState } from 'react'
import { assets } from '@/assets/assets'  
import Image from 'next/image'
 

const Header = () => {
  return (
    <div className="pt-32 p-8 bg-gray-100 min-h-screen">
        <div className="z-[100] relative max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Kontakt</h2>
            <form method="POST" action="http://localhost/react-obchodne-priestory/react-obchodne-piestory/public/send-mail.php" className="space-y-4">
              <input 
                type="text" 
                name="name"
                placeholder="Vaše meno"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input 
                type="email" 
                name="email"
                placeholder="Váš email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input 
                type="text" 
                name="subject"
                placeholder="Predmet správy"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea 
                name="message" 
                placeholder="Vaša správa"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              
              <button 
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Odoslať
              </button>
            </form>
        </div>
    </div>
  )
}

export default Header