import React from 'react'
import heroimage from '../PirateKing55 codecraft main codecraft-final-project-src_assets/heroImage.png'
import { MdOutlineArrowRight } from "react-icons/md";
import rohan from '../PirateKing55 codecraft main codecraft-final-project-src_assets/rohan.jpg'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='text-white flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold'>
                    I'm Full Stack Web Developer
                </h2>
                <p className='text-gray-300 py-4 max-w-md'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut sint animi, officia commodi odit eligendi modi vitae non cumque quas laboriosam dolore assumenda corporis ipsum tempore deleniti quis vero vel.

                </p>
                <div>
                    <button className='group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-800 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineArrowRight size={25} className='ml-1'/>
                        </span>
                    
                    </button>
                </div>
            </div>
            <div className='text-white'>
                <img src={rohan} alt="image not loaded" className='rounded-2xl mx-auto w-2/3 md:w-1/2 ' />
            </div>
        </div>
    </div>
  )
}

export default Home