import React, { Component } from 'react'

export default class Popular extends Component {
    render() {
        return (
            <div className='py-8 md:py-[2rem] bg-green-900'>
                <div className='container '>
                    <div id='popular' className=' flex flex-col gap-12'>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='title'>Your Choice Plant</h1>
                            <p className='font-lobster text-slate-300'>Follow instructions for more</p>
                        </div>
                        <div className='mt-36 md:mt-24 lg:mt-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-36 lg:gap-8'>
                            {/* card 1 */}
                            <div className='group flex flex-col gap-2 p-10 pb-4 pt-24 bg-green-950 rounded-md relative border border-transparent hover:border-yellow-500 duration-500 hover:shadow-2xl will-change-transform'>
                                <img
                                    className='absolute -top-[70%] left-1/2 translate-x-[-50%] w-[16rem] transition-all group-hover:-top-[80%] duration[10000ms]'
                                    src='assets/img/cart-1.png'
                                    alt='popular_image'
                                />
                                <div className='text-start'>
                                    <p className='italic'>Nephrolepis exaltata</p>
                                    <p>Boston Fern</p>
                                </div>
                                <div className='flex justify-start gap-1'>
                                    <i className='ri-star-fill text-yellow-500'></i>
                                    <i className='ri-star-fill text-yellow-500'></i>
                                    <i className='ri-star-half-fill text-yellow-500'></i>
                                    <i className='ri-star-line text-gray-400'></i>
                                    <i className='ri-star-line text-gray-400'></i>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p>5$</p>
                                    <button>
                                        <i className='ri-shopping-cart-fill bg-yellow-500 p-2 rounded-sm'></i>
                                    </button>
                                </div>
                            </div>
                            {/* card 2 */}
                            <div className='group flex flex-col gap-2 p-10 pb-4 pt-24 bg-green-950 rounded-md relative border border-transparent hover:border-yellow-500 duration-500 hover:shadow-2xl will-change-transform'>
                                <img
                                    className='absolute -top-[70%] left-1/2 translate-x-[-50%] w-[16rem] transition-all group-hover:-top-[80%] duration[10000ms]'
                                    src='assets/img/cart-2.png'
                                    alt='popular_image'
                                />
                                <div className='text-start'>
                                    <p className='italic'>Nephrolepis exaltata</p>
                                    <p>Boston Fern</p>
                                </div>
                                <div className='flex justify-start gap-1'>
                                    <i className='ri-star-fill text-yellow-500'></i>
                                    <i className='ri-star-fill text-yellow-500'></i>
                                    <i className='ri-star-half-fill text-yellow-500'></i>
                                    <i className='ri-star-line text-gray-400'></i>
                                    <i className='ri-star-line text-gray-400'></i>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p>5$</p>
                                    <button>
                                        <i className='ri-shopping-cart-fill bg-yellow-500 p-2 rounded-sm'></i>
                                    </button>
                                </div>
                            </div>
                            {/* card 3 */}
                            <div className='group flex flex-col gap-2 p-10 pb-4 pt-24 bg-green-950 rounded-md relative border border-transparent hover:border-yellow-500 duration-500 hover:shadow-2xl will-change-transform'>
                                <img
                                    className='absolute -top-[70%] left-1/2 translate-x-[-50%] w-[16rem] transition-all group-hover:-top-[80%] duration[10000ms]'
                                    src='assets/img/cart-3.png'
                                    alt='popular_image'
                                />
                                <div className='text-start'>
                                    <p className='italic'>Nephrolepis exaltata</p>
                                    <p>Boston Fern</p>
                                </div>
                                <div className='flex justify-start gap-1'>
                                    <i className='ri-star-fill text-yellow-500'></i>
                                    <i className='ri-star-fill text-yellow-500'></i>
                                    <i className='ri-star-half-fill text-yellow-500'></i>
                                    <i className='ri-star-line text-gray-400'></i>
                                    <i className='ri-star-line text-gray-400'></i>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p>5$</p>
                                    <button>
                                        <i className='ri-shopping-cart-fill bg-yellow-500 p-2 rounded-sm'></i>
                                    </button>
                                </div>
                            </div>
                            {/* card 4 */}
                            <div className='group flex flex-col gap-2 p-10 pb-4 pt-24 bg-green-950 rounded-md relative border border-transparent hover:border-yellow-500 duration-500 hover:shadow-2xl will-change-transform'>
                                <img
                                    className='absolute -top-[70%] left-1/2 translate-x-[-50%] w-[16rem] transition-all group-hover:-top-[80%] duration[10000ms]'
                                    src='assets/img/cart-4.png'
                                    alt='popular_image'
                                />
                                <div className='text-start'>
                                    <p className='italic'>Nephrolepis exaltata</p>
                                    <p>Boston Fern</p>
                                </div>
                                <div className='flex justify-start gap-1'>
                                    <i className='ri-star-fill text-yellow-500'></i>
                                    <i className='ri-star-fill text-yellow-500'></i>
                                    <i className='ri-star-half-fill text-yellow-500'></i>
                                    <i className='ri-star-line text-gray-400'></i>
                                    <i className='ri-star-line text-gray-400'></i>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p>5$</p>
                                    <button>
                                        <i className='ri-shopping-cart-fill bg-yellow-500 p-2 rounded-sm'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
