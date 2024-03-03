import React, { useState } from 'react'

const Header = () => {
    const [signIn, setSignIn]= useState(true)
    const toggleSignIn =()=> {
        setSignIn(!signIn)
    }
  return (
    <>
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black">
        <img
            src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
            alt="logo"
            height={180}
            width={200}
        />
    </div>
    <form className='absolute w-3/12 my-36 mx-auto right-0 left-0 bg-black bg-opacity-70 round-lg p-12'>
        <h1 className='font-bold text-3xl text-white py-4'>{signIn ? 'Sign In' : 'Sign Up'}</h1>
        {!signIn && <input type='text' placeholder='Full Name' className='p-4 my-2  w-full bg-zinc-800'/>}
        <input type='text' placeholder='Email Address' className='p-4 my-2  w-full bg-zinc-800'/>
        <input type='password' placeholder='Password' className='p-4 my-2 w-full bg-zinc-800'/>
        <button className='p-3 my-6 bg-red-600 w-full text-white rounded-lg'> {signIn ? 'Sign In' : 'Sign Up'} </button>
        <p className='text-white cursor-pointer' onClick={toggleSignIn}> {signIn?  'New to Netflix? Sign Up Now': 'Already a Member? Sign In Now'}</p>

    </form>
    </>
  )
}

export default Header