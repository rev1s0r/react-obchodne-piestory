'use client'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import React from 'react'
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

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
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt='' className='w-full' />
            </div>
            <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
                <a href="#top">
                    <Image src={assets.logo} alt="logo" className="mr-4 w-50 cursor-pointer" />
                </a>
                <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
                    <li><a className='font-Ovo' href="#top">Domov</a></li>
                    <li><a className='font-Ovo' href="#popis">Popis</a></li>
                    <li><a className='font-Ovo' href="#priestory">Priestory</a></li>
                    <li><a className='font-Ovo' href="#parkovanie">Parkovanie</a></li>
                    <li><a className='font-Ovo' href="#kontakt">Kontakt</a></li>
                </ul>
                <div className='flex items-center gap-4'>
                    <button>
                        <Image src={assets.moon_icon} alt='' className='w-6' />
                    </button>

                    <a href="#contact" className='font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Kontakt <Image src={assets.arrow_icon} alt="" className="w-3" /></a>
                    <button className='block md:hidden ml-3' onClick={toggleMenu}>
                        <Image src={assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>

                <ul ref={menuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-40 h-screen bg-rose-50 transition-all duration-500 ${isMenuOpen ? 'right-0' : '-right-64'}`}>
                    <div onClick={closeMenu} className='absolute top-6 right-6'>
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/>
                    </div>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#top">Domov</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#popis">Popis</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#priestory">Priestory</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#parkovanie">Parkovanie</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#kontakt">Kontakt</a></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar