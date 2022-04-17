import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'
import Router from 'next/router'

const bank = () => {
  const onClick = () => {
    Router.push('/login')
  }

  return (
    <div>
      <div className='w-full mt-8 flex justify-between items-center px-16'>
        <p className='text-3xl'>Welcome back, Mikyle!</p>
        <Image src={logo} alt='Bankist App Logo' width={50} height={50} />
        <button
          onClick={onClick}
          className='text-3xl px-5 pb-3 py-4 bg-[#2bb580] hover:bg-[#1b9264] rounded-xl'
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default bank
