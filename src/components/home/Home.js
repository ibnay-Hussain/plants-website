import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <section id="home" className=' mt-16 md:mt-[7rem] lg:mt-[10rem] '>
            <div className='container'>
                <div className='flex flex-col gap-[5rem] md:gap-0 md:flex-row '>
                    {/* blob-1 */}
                    <div className=' hidden md:block absolute w-64 h-64 bg-green-500 blur-3xl opacity-40 left-1/2 top-1/4 '>
                    </div> 
                    {/* blob-2 */}
                    <div className='hidden md:block absolute w-64 h-64 bg-green-500 blur-3xl opacity-40 right-10 top-1/2 '>
                    </div>
                    {/* content */}
                    <div className=' flex flex-col gap-5 w-full lg:w-[50%]'>
                        <h1>
                            <span className="text-yellow-500">Plants </span>make a
                            <br />
                                positive
                            <span className="text-yellow-500"> impact </span>on
                            <br />
                                our environment
                        </h1>
                        <p className='text-slate-300 font-lobster w-auto md:w-[20rem] lg:w-auto '>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione laboriosam voluptatum maiores velit expedita repellat non ducimus dolorem repellendus molestias, hic quidem voluptate architecto corrupti a, soluta ipsa libero ad.
                        </p>
                        <div className='inline-flex flex-row gap-2 flex-row'>
                            <button className='btn '>
                                <span>Shop now</span>
                                <i className='ri-leaf-line'></i>
                            </button>
                            <button className='btn btn-outline'>
                                <span>Know more</span>
                                <i className='ri-leaf-line'></i>
                            </button>                       
                        </div>
                        <p className='text-slate-300 font-lobster'>
                            You will get 30 days free trial
                        </p>
                        <div className='flex gap-2'>
                            <i className='ri-facebook-fill hover:text-yellow-400 text-xl cursor-pointer'></i>
                            <i className='ri-twitter-fill hover:text-yellow-400 text-xl cursor-pointer'></i>
                            <i className='ri-instagram-fill hover:text-yellow-400 text-xl cursor-pointer'></i>
                            <i className='ri-linkedin-fill hover:text-yellow-400 text-xl cursor-pointer'></i>
                        </div>
                    </div>
                    {/* image */}
                    <div className='relative w-full lg:w-[50%]'>
                        <img src="assets/img/home.png" alt="home_image" className='w-full md:max-w-[400px] lg:max-w-[400px]  object-cover mx-auto' />
                        <div className='absolute -top-10 -md:top-1 lg:-top-10 right-0 md:right-10 lg:right-0 opacity-30 animate-movingY animate-movingY'>
                            <i className="ri-leaf-line text-6xl text-yellow-500"></i>
                        </div>
                        <div className='absolute bottom-0 md:bottom-10 lg:bottom-0 left-0 md:left-10 opacity-30 lg:left-0 animate-rotating'>
                            <img src="assets/img/flower-line.svg" alt="" className='w-14 text-yellow-500' />
                        </div>
                        <div className='absolute -top-10 -md:top-1 lg:-top-10 left-0 md:left-10 lg:left-0 opacity-30 animate-scaling'>
                            <i className="ri-plant-line text-6xl text-yellow-500"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
