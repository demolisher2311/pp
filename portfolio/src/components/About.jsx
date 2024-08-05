import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline '>About</p>

            </div >
            <p className='text-xl mt-16'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum est quisquam ut nemo. Voluptatum corporis ab, consequuntur nobis molestias dolorem natus! Quam, dolore? Incidunt minus a error nemo, natus eaque!</p>
            <br />
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In omnis quos dolores expedita ipsa animi ea dolor dolore, eveniet officiis aliquam soluta quisquam magni hic impedit architecto asperiores, dignissimos iste.</p>
            
        </div>
        
    </div>
  )
}

export default About