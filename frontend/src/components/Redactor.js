import React from 'react'
import { useNavigate } from 'react-router-dom'
import {UserAuth} from '../util/AuthContext'
const Redactor = () => {
    const navigate = useNavigate()
    const {user, login} = UserAuth();
  return (
      <>
      <button className='bg-black text-white text-xl w-[200px] h-[100px] rounded'>Authenticate</button>
      </>
  )
}

export default Redactor