/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { data } from 'autoprefixer'
import Router from 'next/router'

function login() {
  const API = 'http://localhost:3000'
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [userNameList, setUserNameList] = useState([])
  const [userPinList, setUserPinList] = useState([])
  const [userFirstName, setUserFirstName] = useState('')
  const [userPin, setUserPin] = useState('')
  // const [errorList, setErrorList] = useState([])
  const onSubmit = (data) => {
    console.log(data)
    setUserFirstName(data.username)
    setUserPin(data.password)
  }
  // console.log(errors)

  let userNameArray = []
  let userPinArray = []

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${API}/accounts/`,
      // data: {
      //   owner: data.username,
      //   pin: data.password,
      // },
    })
      .then((res) => {
        data = res.data
        console.log(data)
        data.map((user) => {
          const userPinString = user.pin.toString()
          userPinArray.push(userPinString)
          setUserPinList(userPinArray)

          userNameArray.push(user.owner)
          setUserNameList(userNameArray)
        })
      })
      .catch((err) => {
        console.log(err)
      })
      .then(() => {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (userNameList.includes(userFirstName) && userPinList.includes(userPin)) {
    Router.push('/bank')
  }

  // if (userPinArray.includes(userPin)) {
  //   console.log('This worked')
  // } else {
  //   console.log('Refactor the pin stuff')
  // }

  return (
    <>
      <div className='flex flex-col gap-6 items-center justify-center h-[100vh]'>
        <Image src={logo} alt='Bankist App Logo' width={100} height={100} />
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
          <input
            className='text-3xl rounded-xl px-5 pt-4 pb-3 outline-none text-black placeholder-gray-300'
            type='text'
            placeholder='Username'
            {...register('username', { required: true })}
          />
          {errors.username && (
            <span className='px-5 text-2xl text-red-600'>
              Please type in your username
            </span>
          )}
          <input
            className='text-3xl rounded-xl px-5 pt-4 pb-3 outline-none text-black placeholder-gray-300'
            type='password'
            placeholder='Password'
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span className='px-5 text-2xl text-red-600'>
              Please type in your password
            </span>
          )}
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
