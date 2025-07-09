import React from 'react'
import { assets, SpacesData } from '../../assets/assets.js'
import Image from 'next/image'

const Spaces = () => {
    return (
        <div id='spaces' className='w-full px-[12%] pt-32 md:pt-18   pb-10 scroll-mt-20'>
            <h2 className='text-center text-5xl font-Ovo'>
                Prenajímame nasledovné priestory
            </h2>

            <p className='text-center max-w-2xl mx-auto mt-12 mb-12 font-Ovo'>
                Ponúkame na prenájom obchodné priestory v centre Nového Mesta nad Váhom na ul. Hurbanova v blízkosti troch parkovísk pre návštevníkov. Budova je dvojpodlažná a disponuje dvoma zásobovacími vstupmi po stranách s parkovacou plochou.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-5'>
                {SpacesData.map((space, index) => (
                    <a key={index} href={`${space.url}`} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg 
                             relative cursor-pointer group"
                             style={{ backgroundImage: `url(${space.bgImage})` }}>
                            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                                <div>
                                    <h2 className='font-semibold'>{space.title}</h2>
                                    <p className='text-sm text-gray-700'>{space.description}</p>
                                </div>
                                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                    <Image src={assets.send_icon} alt='send icon' className='w-5' />
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>

    )
}

export default Spaces