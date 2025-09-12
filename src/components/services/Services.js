import React, { Component } from 'react'

export default class Services extends Component {
  render() {
    return (
      <div>
            <div className='bg-white text-green-900 py-[3rem] lg:py-[7rem]  mt-[3rem] md:mt-[5rem]'>
                <div className='container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {/* card 1 */}
                    <div className='border border-green-900 rounded-md p-5 hover:shadow-2xl hover:-translate-y-1 hover:bg-green-900 hover:text-white duration-300 cursor-pointer will-change-transform'>
                        <div className='flex items-center gap-5 mb-2'>
                            <i className='ri-truck-line text-3xl md:text-4xl xl:text-5xl p-0'></i>
                            <p className='md-text-lg font-bold'>
                                Fast <br/>Delivery
                            </p>
                        </div>
                        <p className='font-lobster ps-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    {/* card 2 */}
                    <div className='border border-green-900 rounded-md p-5 hover:shadow-2xl hover:-translate-y-1 hover:bg-green-900 hover:text-white duration-300 cursor-pointer will-change-transform'>
                        <div className='flex items-center gap-5 mb-2'>
                            <i className='ri-customer-service-line text-3xl md:text-4xl xl:text-5xl p-0'></i>
                            <p className='md-text-lg font-bold'>
                                Great Customer <br/> Service
                            </p>
                        </div>
                        <p className='font-lobster ps-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    {/* card 3 */}
                    <div className='border border-green-900 rounded-md p-5 hover:shadow-2xl hover:-translate-y-1 hover:bg-green-900 hover:text-white duration-300 cursor-pointer will-change-transform'>
                        <div className='flex items-center gap-5 mb-2'>
                            <i className='ri-plant-line text-3xl md:text-4xl xl:text-5xl p-0'></i>
                            <p className='md-text-lg font-bold'>
                                Original <br/> Plants
                            </p>
                        </div>
                        <p className='font-lobster ps-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    {/* card 4 */}
                    <div className='border border-green-900 rounded-md p-5 hover:shadow-2xl hover:-translate-y-1 hover:bg-green-900 hover:text-white duration-300 cursor-pointer will-change-transform'>
                        <div className='flex items-center gap-5 mb-2'>
                            <i className='ri-money-dollar-circle-line text-3xl md:text-4xl xl:text-5xl p-0'></i>
                            <p className='md-text-lg font-bold'>
                                Affordable <br/> Price
                            </p>
                        </div>
                        <p className='font-lobster ps-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
