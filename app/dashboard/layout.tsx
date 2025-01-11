import React from 'react'
import SideNav from './_components/SideNav';

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
        <div className='md:w-64 md:hidden m:block fixed'>
          <SideNav />
        </div>
        <div className='md:ml-64'>
          {children}
        </div>
        
    </div>
  )
}

export default layout