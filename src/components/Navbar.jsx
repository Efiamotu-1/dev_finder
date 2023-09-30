import React, { useState } from 'react'
import Moonicon from '../assets/Path.png'
import Sunicon from '../assets/sun.png'

function Navbar() {
    const [darkmode, setDarkmode] = useState(false)
  return (
    <div className='flex justify-between mb-5'>
        <p className='font-bold text-[26px] dark:text-white'>devfinder</p>
        <div className='flex gap-3 items-center cursor-pointer' onClick={() => {
            document.documentElement.classList.toggle('dark')
            setDarkmode(mode => !mode)
        }}>
            <span className='text-[#4B6A9B] hover:text-[#90A4D4] dark:hover:text-[#222731] text-[13px] tracking-[2.5px] dark:text-white'>{darkmode ? "LIGHT" : "DARK"}</span>
            <img src={darkmode ? Sunicon : Moonicon}/>
        </div>
    </div>
  )
}

export default Navbar