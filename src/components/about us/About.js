import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
           <div className='about-us container my-8 md:my-[2rem] '>
                <div className='flex flex-col gap-0 md:gap-16 items-center justify-center text-center'>
                    <div className="">
                        <h1 className='title'>About Us</h1>
                        <p className='font-lobster text-slate-300'>Follow instructions for more</p>
                    </div>
                    <div className='grid grid-cols-1 gap-3 md:gap-16 lg:gap-12'>
                        {/* item 1 */}
                        <div className='flex flex-col md:flex-row items-center justify-between md:justify-center lg:justify-around'>
                            {/* image */}
                            <div className='flex items-center justify-center w-full sm:w-2/3 md:1/2 xl:w-2/3'>
                                <img className='w-full md:1/2 xl:w-2/3'  src="assets/img/plant-1.png" alt="about_image" />
                            </div>
                            {/* content */}
                            <div className='w-full md:w-full xl:w-2/3'>
                                <div>
                                    <h2 className='text-start mb-2'>Make your <span className='text-yellow-500'>organic</span> garden</h2>
                                    <p className='text-justify md:text-start lg:text-justify  w-full p-0 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi id dolorum sequi ad, doloremque quis placeat, exercitationem, sunt doloribus a nam enim ut quibusdam aspernatur qui quae provident blanditiis tenetur.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi id dolorum sequi ad, doloremque quis placeat, exercitationem, sunt doloribus a nam enim ut quibusdam aspernatur qui quae provident blanditiis tenetur.</p>
                                </div>
                            </div>
                        </div>
                        {/* item 2 */}
                        <div className='flex flex-col md:flex-row-reverse items-center justify-between md:justify-center lg:justify-around'>
                            {/* image */}
                            <div className='flex items-center justify-center w-full sm:w-2/3 md:1/2 xl:w-2/3'>
                                <img className='w-full md:1/2 xl:w-2/3'  src="assets/img/plant-1.png" alt="about_image" />
                            </div>
                            {/* content */}
                            <div className='w-full md:w-full xl:w-2/3'>
                                <div>
                                    <h2 className='text-start mb-2'>Make your <span className='text-yellow-500'>organic</span> garden</h2>
                                    <p className='text-justify md:text-start lg:text-justify  w-full p-0 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi id dolorum sequi ad, doloremque quis placeat, exercitationem, sunt doloribus a nam enim ut quibusdam aspernatur qui quae provident blanditiis tenetur.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi id dolorum sequi ad, doloremque quis placeat, exercitationem, sunt doloribus a nam enim ut quibusdam aspernatur qui quae provident blanditiis tenetur.</p>
                                </div>
                            </div>
                        </div>
                        {/* item 3 */}
                        <div className='flex flex-col md:flex-row items-center justify-between md:justify-center lg:justify-around'>
                            {/* image */}
                            <div className='flex items-center justify-center w-full sm:w-2/3 md:1/2 xl:w-2/3'>
                                <img className='w-full md:1/2 xl:w-2/3'  src="assets/img/plant-1.png" alt="about_image" />
                            </div>
                            {/* content */}
                            <div className='w-full md:w-full xl:w-2/3'>
                                <div>
                                    <h2 className='text-start mb-2'>Make your <span className='text-yellow-500'>organic</span> garden</h2>
                                    <p className='text-justify md:text-start lg:text-justify  w-full p-0 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi id dolorum sequi ad, doloremque quis placeat, exercitationem, sunt doloribus a nam enim ut quibusdam aspernatur qui quae provident blanditiis tenetur.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi id dolorum sequi ad, doloremque quis placeat, exercitationem, sunt doloribus a nam enim ut quibusdam aspernatur qui quae provident blanditiis tenetur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>  
      </div>
    )
  }
}
