'use client'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import React from 'react'
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 0); 
        };
        handleScroll();  
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isMenuOpen) return;
        
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-white shadow-lg backdrop-blur-sm' 
                    : 'bg-transparent'
            }`}>
                <a href="#header">
                    <div className="mr-4 cursor-pointer text-l md:text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 text-gray-800">
                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
                            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
                            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
                            <path d="M10 6h4"/>
                            <path d="M10 10h4"/>
                            <path d="M10 14h4"/>
                            <path d="M10 18h4"/>
                        </svg>
                        <div>
                            <span className="text-gray-800">Obchodné</span><span className="text-gray-600">Priestory</span><span className="text-sm font-normal text-gray-400">.sk</span>
                        </div>
                    </div>
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm transition-all duration-300 ${
                    isScrolled 
                        ? 'bg-gray-50 bg-opacity-80' 
                        : 'bg-white bg-opacity-50'
                }`}>
                    <li><a className='font-Ovo hover:text-gray-600 transition-colors duration-300 relative hover:after:w-full after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-gray-600 after:w-0 after:transition-all after:duration-300' href="#header">Úvod</a></li>
                    <li><a className='font-Ovo hover:text-gray-600 transition-colors duration-300 relative hover:after:w-full after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-gray-600 after:w-0 after:transition-all after:duration-300' href="#spaces">Priestory</a></li>
                    <li><a className='font-Ovo hover:text-gray-600 transition-colors duration-300 relative hover:after:w-full after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-gray-600 after:w-0 after:transition-all after:duration-300' href="#contact">Kontakt</a></li>
                </ul>
                <div className='flex items-center gap-4'>
                    <a href="#contact" className='font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Kontakt <Image src={assets.arrow_icon} alt="" className="w-3" /></a>
                    <button className='block md:hidden ml-3' onClick={toggleMenu}>
                        <Image src={assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>

                <ul ref={menuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-40 h-screen bg-rose-50 transition-all duration-500 ${isMenuOpen ? 'right-0' : '-right-64'}`}>
                    <div onClick={closeMenu} className='absolute top-6 right-6'>
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/>
                    </div>
                    <li><a className='font-Ovo hover:text-gray-600 transition-colors duration-300 hover:pl-2' onClick={closeMenu} href="#theader">Úvod</a></li>
                    <li><a className='font-Ovo hover:text-gray-600 transition-colors duration-300 hover:pl-2' onClick={closeMenu} href="#spaces">Priestory</a></li>
                    <li><a className='font-Ovo hover:text-gray-600 transition-colors duration-300 hover:pl-2' onClick={closeMenu} href="#contact">Kontakt</a></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar