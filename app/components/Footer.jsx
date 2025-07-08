import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
    return (
        <>
            {/* Starý footer s logom */}
            <div className='mt-20'>
                <div className='flex justify-center items-center py-10'>
                    <a href="#top">
                        <div className="mr-4 cursor-pointer text-l md:text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 text-gray-800">
                                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                                <path d="M10 6h4" />
                                <path d="M10 10h4" />
                                <path d="M10 14h4" />
                                <path d="M10 18h4" />
                            </svg>
                            <div>
                                <span className="text-gray-800">Obchodné</span><span className="text-gray-600">Priestory</span><span className="text-sm font-normal text-gray-400">.sk</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            {/* Nový footer s copyright a sociálnymi sieťami */}
            <div className='text-center md:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2025 Obchodné priestory. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 md:mt-0'>
                    <li><a href="mailto:info@obchodnepriesotry.sk" className=" hover:text-black transition-colors">
                    info(zavinac)obchodnepriestory.sk
            </a></li>
                    <li><a href="tel:+421904352987" className="hover:text-black transition-colors">
                    +421 904 352 987
                  </a></li>
                </ul>   
            </div>
        </>
    )
}

export default Footer