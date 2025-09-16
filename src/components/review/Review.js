import React, { Component } from 'react'
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

Swiper.use([Pagination, Autoplay]);

export default class Review extends Component {

    componentDidMount() {
        this.swiper = new Swiper('.swiper', {
            breakpoints: {
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 40 },
                1440: { slidesPerView: 4, spaceBetween: 50 },
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            spaceBetween: 10,
            speed: 400,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            grabCursor: true,
        });
    }


    render() {
        return (
            <div >
                <div id='review' className='py-8 md:py-[4rem] my-6 mb-48 relative overflow-hidden'>
                    <div>
                        <img className='w-[8rem] md:w-[10rem] absolute -top-2 -left-10 ' src="assets/img/leaf-4.png" alt="" />
                    </div>
                    <div className='container'>
                        <div className='flex flex-col gap-0 md:gap-16 items-center justify-center text-center'>
                            <div className="">
                                <h1 className='title'>Review page</h1>
                                <p className='font-lobster text-slate-300'>We are here to help you</p>
                                <div />
                            </div>
                        </div>
                        <div className='pt-12'>
                            <div className='swiper'>
                                <div className='swiper-wrapper '>
                                    <div className='swiper-slide'>
                                        <div className='container flex flex-col gap-2 bg-green-900 rounded-md py-4'>
                                            <p className='font-lobster text-justify text-[0.9rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quibusdam porro voluptas expedita atque, tenetur, ab, obcaecati molestias reprehenderit repellat explicabo nisi eveniet. Labore doloremque eos temporibus corporis ipsam eaque.</p>
                                            <div className='flex gap-2 items-center'>
                                                <img className='w-12 h-12 rounded-full' src="assets/img/review-1.jpg" alt="review_image" />
                                                <div>
                                                    <p className='text-yellow-500 uppercase'>John Deo</p>
                                                    <p>Designer</p>
                                                </div>
                                                <i className='ri-double-quotes-r text-4xl ml-auto'></i>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='swiper-slide'>
                                        <div className='container flex flex-col gap-2 bg-green-900 rounded-md py-4'>
                                            <p className='font-lobster text-justify text-[0.9rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quibusdam porro voluptas expedita atque, tenetur, ab, obcaecati molestias reprehenderit repellat explicabo nisi eveniet. Labore doloremque eos temporibus corporis ipsam eaque.</p>
                                            <div className='flex gap-2 items-center'>
                                                <img className='w-12 h-12 rounded-full' src="assets/img/review-1.jpg" alt="review_image" />
                                                <div>
                                                    <p className='text-yellow-500 uppercase'>John Deo</p>
                                                    <p>Designer</p>
                                                </div>
                                                <i className='ri-double-quotes-r text-4xl ml-auto'></i>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='swiper-slide'>
                                        <div className='container flex flex-col gap-2 bg-green-900 rounded-md py-4'>
                                            <p className='font-lobster text-justify text-[0.9rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quibusdam porro voluptas expedita atque, tenetur, ab, obcaecati molestias reprehenderit repellat explicabo nisi eveniet. Labore doloremque eos temporibus corporis ipsam eaque.</p>
                                            <div className='flex gap-2 items-center'>
                                                <img className='w-12 h-12 rounded-full' src="assets/img/review-1.jpg" alt="review_image" />
                                                <div>
                                                    <p className='text-yellow-500 uppercase'>John Deo</p>
                                                    <p>Designer</p>
                                                </div>
                                                <i className='ri-double-quotes-r text-4xl ml-auto'></i>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='swiper-slide'>
                                        <div className='container flex flex-col gap-2 bg-green-900 rounded-md py-4'>
                                            <p className='font-lobster text-justify text-[0.9rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quibusdam porro voluptas expedita atque, tenetur, ab, obcaecati molestias reprehenderit repellat explicabo nisi eveniet. Labore doloremque eos temporibus corporis ipsam eaque.</p>
                                            <div className='flex gap-2 items-center'>
                                                <img className='w-12 h-12 rounded-full' src="assets/img/review-1.jpg" alt="review_image" />
                                                <div>
                                                    <p className='text-yellow-500 uppercase'>John Deo</p>
                                                    <p>Designer</p>
                                                </div>
                                                <i className='ri-double-quotes-r text-4xl ml-auto'></i>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='swiper-slide'>
                                        <div className='container flex flex-col gap-2 bg-green-900 rounded-md py-4'>
                                            <p className='font-lobster text-justify text-[0.9rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quibusdam porro voluptas expedita atque, tenetur, ab, obcaecati molestias reprehenderit repellat explicabo nisi eveniet. Labore doloremque eos temporibus corporis ipsam eaque.</p>
                                            <div className='flex gap-2 items-center'>
                                                <img className='w-12 h-12 rounded-full' src="assets/img/review-1.jpg" alt="review_image" />
                                                <div>
                                                    <p className='text-yellow-500 uppercase'>John Deo</p>
                                                    <p>Designer</p>
                                                </div>
                                                <i className='ri-double-quotes-r text-4xl ml-auto'></i>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='swiper-slide'>
                                        <div className='container flex flex-col gap-2 bg-green-900 rounded-md py-4'>
                                            <p className='font-lobster text-justify text-[0.9rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quibusdam porro voluptas expedita atque, tenetur, ab, obcaecati molestias reprehenderit repellat explicabo nisi eveniet. Labore doloremque eos temporibus corporis ipsam eaque.</p>
                                            <div className='flex gap-2 items-center'>
                                                <img className='w-12 h-12 rounded-full' src="assets/img/review-1.jpg" alt="review_image" />
                                                <div>
                                                    <p className='text-yellow-500 uppercase'>John Deo</p>
                                                    <p>Designer</p>
                                                </div>
                                                <i className='ri-double-quotes-r text-4xl ml-auto'></i>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='swiper-pagination'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
