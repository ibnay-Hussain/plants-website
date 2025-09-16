import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
            <div className='pt-8 md:pt-[8rem] pb-6 bg-yellow-100 text-green-950 relative '>
                <div className='container text-white absolute top-0 right-0 left-0 -translate-y-1/2  '>
                        <div className='bg-green-900 pt-5 md:pb-15 md:pt-10 space-y-3 md:space-y-5 rounded-md pb-10 px-8'>
                            <h2>
                                <span className='text-yellow-500'>Subscribe </span>to our Newsletter
                            </h2>
                            <div className='flex flex-col md:flex-row gap-2'>
                                
                                <input type="text" className='w-full text-green-900 px-5 py-3 rounded-md outline-none' placeholder='Your Email Address'/>
                                <button className='inline-flex items-center justify-center gap-2 bg-green-950 px-5 py-3 rounded-md hover:bg-yellow-500'>
                                    <span>Subscribe</span>
                                    <i className='ri-send-plane-2-fill'></i>
                                </button>
                            </div>   
                        </div>   
                </div>  
                {/* social icons */}
                <div className="container mt-28 md:mt-26 lg:mt-0">
                    <div className='border-b border-green-500 relative'>
                        <div className='absolute -translate-y-1/2 left-0 right-0 flex justify-center'>
                            <div className='flex gap-3 bg-yellow-100 px-5'>
                                <i className='ri-facebook-fill hover:text-yellow-400 text-xl cursor-pointer'></i>
                                <i className='ri-twitter-fill hover:text-yellow-400 text-xl cursor-pointer'></i>
                                <i className='ri-instagram-fill hover:text-yellow-400 text-xl cursor-pointer'></i>
                                <i className='ri-linkedin-fill hover:text-yellow-400 text-xl cursor-pointer'></i>
                            </div>
                        </div>
                    </div>
                </div>  
                {/* content */}
                <div className='mt-12 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-center'>
                    {/* item 1 */}
                    <div>
                        <div className='text-6xl text-green-700 inline-block'>
                            <i className="ri-leaf-fill"></i>
                            <p className='sm:text-2xl text-xl font-lobster'>IndorePlants</p>
                        </div>
                    </div>
                    {/* item 2 */}
                    <div>
                        <p className='font-bold text-xl'>Quick Link</p>
                        <div className='text-green-700 mt-2 flex flex-col gap-2 items-center justify-center'>
                            <a href="/">Plants</a>
                            <a href="/">Flowers</a>
                            <a href="/">Gardening</a>
                            <a href="/">Seeds</a>
                            <a href="/">Shipping</a>
                        </div>
                    </div>
                    {/* item 3 */}
                    <div>
                        <p className='font-bold text-xl'>Popular Services</p>
                        <div className='text-green-700 mt-2 flex flex-col gap-2 items-center justify-center'>
                            <a href="/">Tree Planting</a>
                            <a href="/">Grass Cutting</a>
                            <a href="/">Weeds Control</a>
                            <a href="/">Project</a>
                        </div>
                    </div>
                    {/* item 4 */}
                    <div className='text-center lg:text-start lg:ps-12'>
                        <p className='font-bold text-xl'>Contact Us</p>
                        <div className='text-green-700 mt-2 flex flex-col gap-2'>
                            <p>+92 3145989551</p>
                            <p>ibnahussainshah@gmail.com</p>
                            <p>Police Housing Society, Islamabad</p>
                        </div>
                    </div>
                </div>
                {/* copy right */}
                <div>
                    <div className='container'>
                        <p className='text-center mt-10 opacity-50'>
                            Copyright &copy; 2024 All Rights Reserved by IndorePlants
                        </p>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
