'use client'
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';     
import { assets } from '@/assets/assets';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '' // Anti-spam field
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [formStartTime] = useState(Date.now()); // Track when form was loaded

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setNotification(null);

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setNotification({ type: 'error', message: 'Všetky polia sú povinné' });
      setIsLoading(false);
      return;
    }

    // Honeypot check - if filled, it's likely a bot
    if (formData.honeypot) {
      setNotification({ type: 'error', message: 'Spam detekovaný' });
      setIsLoading(false);
      return;
    }

    // Time-based check - form submitted too quickly (less than 3 seconds)
    const timeTaken = Date.now() - formStartTime;
    if (timeTaken < 3000) {
      setNotification({ type: 'error', message: 'Formulár bol odoslaný príliš rýchlo' });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost/react-obchodne-priestory/react-obchodne-piestory/public/send-mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if (result.status === 'success') {
        setNotification({ type: 'success', message: result.message });
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        setNotification({ type: 'error', message: result.message });
      }
    } catch (error) {
      setNotification({ type: 'error', message: 'Chyba pri odosielaní emailu' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
        <div className="z-[100] relative h-full bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Kontakt</h2>
            
            {/* Notification */}
            {notification && (
              <div className={`mb-6 p-4 rounded ${
                notification.type === 'success' 
                  ? 'bg-green-100 border border-green-400 text-green-700' 
                  : 'bg-red-100 border border-red-400 text-red-700'
              }`}>
                <div className="flex">
                  <div>
                    <span className={`${
                      notification.type === 'success' ? 'text-green-500' : 'text-red-500'
                    } mr-2`}>
                      {notification.type === 'success' ? '✅' : '❌'}
                    </span>
                    {notification.message}
                  </div>
                  <button 
                    onClick={() => setNotification(null)}
                    className="ml-auto text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <input 
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Vaše meno"
                className="p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
                required
                disabled={isLoading}
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Váš e-mail"
                className="p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
                required
                disabled={isLoading}
              />
              </div>
              <textarea 
                rows="6"
                name="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Text správy"
                className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white resize-none"
                required
                disabled={isLoading}
              ></textarea>
              
              <div className="text-center">
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="py-3 px-8 inline-flex items-center gap-2 bg-black/80 text-white rounded-full hover:bg-black duration-500 transition-all"
                  >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Odosielam...
                    </div>
                  ) : (
                    <>
                      Odoslať <Image src={assets.right_arrow_white} alt="" className="w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
        </div>
    </div>
  )
}

export default ContactForm