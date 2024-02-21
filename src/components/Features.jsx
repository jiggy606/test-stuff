import React from 'react'
import banner from '../assets/banner.jpg'

function Features() {
  return (
    <div className=' my-24 md:px-14 max-w-screen-2xl mx-auto'>
        <div className=' flex flex-col lg:flex-row justify-between items-start gap-10'>
            <div className=' lg:w-1/4'>
                <h3 className=' text-3xl text-primary font-bold mb-3 lg:w-1/2'>What happpned to Virgil</h3>
                <p className=' text-base text-tetiary'>If you have concerns about the battery or if you notice unusual behavior, it's recommended to contact Apple Support</p>
            </div>

            <div className=' w-full lg:w-3/4'>
                <div>
                    <div>
                        <img src={banner} alt='' />
                        <h4 className=' text-2xl font-semibold text-primary px-5 text-center mt-5'>Explore exciting places</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Features