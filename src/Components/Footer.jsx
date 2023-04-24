import React from 'react'
import {AiFillInstagram, AiFillFacebook, AiOutlineWhatsApp} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <section className='w-full bg-[#666]'>
        <h1 className='text-center text-xl text-white'>Siga-nos em nossas redes sociais</h1>

        <div className='flex justify-center gap-20'>
            <AiFillInstagram className='text-white text-5xl'/> 
            <AiFillFacebook className='text-white text-5xl'/> 
            <FaTiktok className='text-white text-5xl'/> 
            <AiOutlineWhatsApp className='text-white text-5xl'/> 
        </div>

        <p className='text-center text-xl text-white'>Telefone para contato: (11) 97739-6401</p>
      </section>
    </div>
  )
}

export default Footer