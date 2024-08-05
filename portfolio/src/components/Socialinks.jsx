import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const Socialinks = () => {

    const links = [
        {
            id:1,
            child: {
                
                
                
            }
        }
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed op'>
        <ul>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-0 bg-gray-500 duration-300'>
                <a href="https://www.linkedin.com/in/rohan-kumar-338813291/" className='flex rounded-tr-md justify-between items-center w-full text-white'>
                    <>
                    LinkedIn <FaLinkedin size={30}/>
                    </>
            
                </a>
            </li>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-0 bg-gray-500 duration-300'>
                <a href="https://github.com/demolisher2311" className='flex rounded-tr-md justify-between items-center w-full text-white'>
                    <>
                    Github <FaGithub size={30}/>
                    </>
            
                </a>
            </li>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-0 bg-gray-500 duration-300'>
                <a href="rohan20kumar04@gmail.com" className='flex rounded-tr-md justify-between items-center w-full text-white'>
                    <>
                    Mail <HiOutlineMail size={30}/>
                    </>
            
                </a>
            </li>
            
        </ul>
    </div>
  )
}

export default Socialinks