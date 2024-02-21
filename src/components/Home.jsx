import React from 'react'
import banner from '../assets/banner.jpg'

function Home() {
  return (
    <div className=' md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
      <div className=' gradientBg rounded-xl rounded-tl-[80px] md:p-9 px-4 py-9'>
        <div className=' flex flex-col md:flex-row-reverse justify-between gap-10 items-center'>
          <div>
            <img src={banner} alt='banner' className=' lg:h-[350px]' />
          </div>

          <div className='md:w-4/5'>
            <h2 className=' md:text-7xl text-4xl font-bold text-white mb-5 leading-relaxed'>Moment of Truth: Lil Durk</h2>
            <p className=' text-[#EBEBEB] text-2xl mb-8'>
              True story don't lie to me. True story my life ain't that easy.
              hustler music i told her to listen to that and yake it easy.
              i'm up all night she think i'm cheating
            </p>
            <div className=' space-x-5 space-y-4'>
              <button className='btnPrimary'>get started</button>
              <button className='btnPrimary'>discount</button>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Home