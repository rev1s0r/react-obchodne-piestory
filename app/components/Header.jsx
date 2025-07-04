import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <div>
            <Image src={assets.profile_img} alt=""/>
        </div>
    </div>
  )
}

export default Header