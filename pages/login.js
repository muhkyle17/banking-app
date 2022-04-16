/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'
import { useForm } from 'react-hook-form'

function login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  // console.log(watch('username'), watch('password'))

  return (
    <>
      <div className='flex flex-col gap-6 items-center justify-center h-[100vh]'>
        <Image src={logo} alt='Bankist App Logo' width={100} height={100} />
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
          <input
            className='text-3xl rounded-xl px-5 pt-4 pb-3 outline-none text-black placeholder-gray-300'
            type='text'
            placeholder='Username'
            {...register('username')}
          />
          <input
            className='text-3xl rounded-xl px-5 pt-4 pb-3 outline-none text-black placeholder-gray-300'
            type='password'
            placeholder='Password'
            {...register('password')}
          />
          <button
            type='submit'
            className='font-extrabold text-white text-3xl px-5 pb-3 py-4 bg-[#2bb580] hover:bg-[#1b9264] rounded-xl'
          >
            Log In
          </button>
        </form>
      </div>
    </>
  )
}

export default login
