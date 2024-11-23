

import React from 'react'
import SigninButton from './signinButton'
import Link from 'next/link'

const AppBar = () => {
  return (
    <div className='flex gap-4 w-full bg-white text-black py-6 px-6'>
        <Link href={'/'}>HomePage</Link>
        <Link href={'UserPost'}>User Post Page</Link>
        <SigninButton />
    </div>
  )
}

export default AppBar