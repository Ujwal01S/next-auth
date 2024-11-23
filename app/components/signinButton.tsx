

'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'


const SigninButton = () => {
  // step 2 begins here as part 1
  const {data:session} = useSession();
  if(session?.user){
    console.log(session.user);
    //we have added the type of session in next-auth.d.ts but still in above clg we don't get access token and id
    return(
        <div className='flex gap-4 ml-auto'>
            <p className='text-sky-600'>{session.user.name}</p>
            <button onClick={() => signOut()} className='text-red-500'>
                Sign Out
            </button>
        </div>
    )
  }
  return (
    <button onClick={() => signIn()} className='text-green-500 ml-auto'>
        Sign In
    </button>
  )
}

export default SigninButton