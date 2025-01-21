import React from 'react'
import Image from 'next/image'

function SideNav() {
  return (
    <div>
        <Image src={'/logo.svg'} alt='logo' width={100} height={100}/>
    </div>
  )
}

export default SideNav