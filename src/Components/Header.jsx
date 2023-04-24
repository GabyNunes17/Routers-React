import React from 'react'
import {BsSearch} from 'react-icons/bs'

const Header = () => {
  return (
    <div>
        <nav className='w-full flex justify-around items-center'>
            <img src="https://react-routers-omega.vercel.app/assets/viagens-b03345b9.jpg" className='w-24 '/>

            <a href="">Home</a>
            <a href="">Grand Canyon</a>
            <a href="">Escócia</a>
            <a href="">Muralhas da China</a>
            <a href="">Aruba</a>
            <div className='flex items-center'>
                <input type="text" className='w-52 border' />
                <BsSearch/>
            </div>
        </nav>
    </div>
  )
}

export default Header