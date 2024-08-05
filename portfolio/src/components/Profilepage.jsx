import React from 'react'
import Dev from '../PirateKing55 codecraft main codecraft-final-project-src_assets/Des.jpg'

import Rav from '../PirateKing55 codecraft main codecraft-final-project-src_assets/Nav.jpg'
import Nav from '../PirateKing55 codecraft main codecraft-final-project-src_assets/photo/reactWeather.jpg'


const Profilepage = () => {

    const Portfolios = [
        {
            id:1,
            src: Dev
        },
        {
            id:2,
            src: Nav
        },
        {
            id:3,
            src: Rav
        }

    ]


  return (
    <div name="portfolio" className='bg-gradient-to-b flex flex-col from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline '>Portfolio</p>
                <p className='py-6'>Check Out Some Of My Work RIght Here</p>

            </div>
            
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12  sm:px-0 w-full '>
        {Portfolios.map(({id,src}) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>

                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                </div>
               
            ))}
            </div>
            </div>
        
    </div>
  )
}

export default Profilepage  