import React from 'react'
import {BsSearch} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav className='w-full flex justify-center gap-10 items-center font-medium'>
            <img src="https://react-routers-omega.vercel.app/assets/viagens-b03345b9.jpg" className='w-24 '/>

            <Link to="/">Home</Link>
            <Link to="/canyon">Grand Canyon</Link>
            <Link to="/escocia">Escócia</Link>
            <Link to="/china">Muralhas da China</Link>
            <Link to="/aruba">Aruba</Link>

            <div className='flex items-center mr-20'>
                <input type="text" className='w-52 border mr-8' />
                <BsSearch/>
            </div>
        </nav>
    </div>
  )
}

export default Header