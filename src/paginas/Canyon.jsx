import React from 'react'

const Canyon = () => {
  return (
    <div className=' bg-canyon w-full h-[550px] bg-cover pt-14'>
        <section className='w-[450px] bg-white bg-opacity-50 backdrop-blur-sm rounded-3xl ml-[40%] pb-3'>

            <h2 className='text-center w-[90%] m-auto text-3xl font-bold text-slate-800 py-5'>Venha explorar esse lugar incrivel!!</h2>

            <p className='w-[95%] text-center m-auto my-5 text-lg font-medium text-slate-800'>O Grand Canyon fica no estado do Arizona e é cortado pelo não tão timido assim Rio Colorado, e forma uma paisagem mais inponente e impactante pessoalmente do que qualquer imagem possa representar. Por isso mesmo, ele é um dos passeios mais procurados por quem visita Las Vegas, que fica no estado vizinho, Nevada</p>
            
            <img src='https://react-routers-omega.vercel.app/assets/viagens-b03345b9.jpg' className='w-14 m-auto rounded-full' />
        </section>
    </div>
  )
}

export default Canyon