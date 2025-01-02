'use client';

import { useEffect, useState } from "react";
import Slider from "react-slick";

// CAROUSEL DATA
interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
    starimg: string;
    detail: string;
}

const postData = [
    {
        profession: 'Law Student',
        name: 'Konen Qureshi',
        imgSrc: '/assets/students/user-1.jpg',
        starimg: '/assets/students/stars.png',
        detail: "I can confidently say I wouldn’t have grown and learned as much as I have without your constant support and guidance. Thank you and I wish the ILC team all the very best."
    },
    {
        profession: 'Law Student',
        name: 'Palaq Thapar',
        imgSrc: '/assets/students/user-2.jpg',
        starimg: '/assets/students/stars.png',
        detail: "Working with ILC has been a great experience till now. Each day I’m learning something new and different. It will be adding something to my C.V. and resume and help me expand my portfolio. Hoping to learn and grow more by the help of such an amazing organization."
    },
    {
        profession: 'Law Student',
        name: 'Louis Mabel',
        imgSrc: '/assets/students/user-3.jpg',
        starimg: '/assets/students/stars.png',
        detail: "My name is Mabel Louis. I got an opportunity to work with Integrated Legal Circle and I must say it was a very enriching experience. I gained knowledge, confidence, and enhanced other skills like organizational skills and adaptability. I am truly grateful for this opportunity."
    },
    {
        profession: 'Law Student',
        name: 'Tejaswi Rallapalli',
        imgSrc: '/assets/students/user-4.jpg',
        starimg: '/assets/students/stars.png',
        detail: "Integrated Legal Circle is a place where one can explore their ideas and develop themselves to the fullest. I honestly have a very good experience learning writing skills from them."
    },
    {
        profession: 'Law Student',
        name: 'Stuti Gupta',
        imgSrc: '/assets/students/user-5.jpg',
        starimg: '/assets/students/stars.png',
        detail: "The ILC team and my manager were always supportive and very friendly and was always there whenever I needed help. It is really nice working with them. Thank you for everything it will always be remembered and I am glad that I am a part of it."
    },
    {
        profession: 'Law Student',
        name: 'Anirud Ramakur',
        imgSrc: '/assets/students/user-6.jpg',
        starimg: '/assets/students/stars.png',
        detail: "Thank you ILC! It has been a great experience to work with professionals and thanks for the mentors who are always there to guide me."
    },
    {
        profession: 'Law Student',
        name: 'Palak',
        imgSrc: '/assets/students/user-7.jpg',
        starimg: '/assets/students/stars.png',
        detail: "ILC has helped me inculcate some essential qualities in myself like professional communication, multi-tasking etc. The entire team is very kind and helpful. They give honest feedback and help me analyse my strengths and weaknesses. ILC has been an amazing experience so far."
    }
];

// CAROUSEL SETTINGS
const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
    ]
};

const Students = () => {
    const [sliderReady, setSliderReady] = useState(false);

    useEffect(() => {
        // Ensuring the component is rendered on the client side (avoid SSR issues)
        setSliderReady(true);
    }, []);

    if (!sliderReady) return null;

    return (
        <div id="testimonial-section" className='bg-bgpink'>
            <div className="mx-auto max-w-2xl px-4 pt-16 pb-64 sm:pt-32 lg:max-w-7xl lg:px-8">

                <div className='sm:flex justify-between items-center pb-6'>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">What Our Happy <br /> Students Says</h2>
                    <div>
                        <button className="bg-transparent hover:bg-purple text-purple font-semibold hover:text-white py-3 px-4 border border-lightgrey hover:border-transparent rounded">
                            Give Your Review
                        </button>
                    </div>
                </div>

                <p className='text-lg font-medium pb-12'>Build skills with our courses and mentor from world-class team.</p>

                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i}>
                            <div className='bg-white m-4 pt-8 px-12 pb-10 text-center rounded-lg'>
                                <div className='relative'>
                                    <img src={items.imgSrc} alt="gaby" className="inline-block h-16 w-16 m-auto rounded-full ring-2 ring-white" />
                                    <img src={'/assets/students/greenpic.svg'} alt="greenbg" className=" absolute inline-block h-6 w-6 position-green" />
                                </div>
                                <h3 className='text-sm pt-4 pb-2'>{items.profession}</h3>
                                <h4 className='text-2xl font-semibold pb-3'>{items.name}</h4>
                                <img src={items.starimg} alt="stars-img" className='m-auto pb-6' />
                                <p className='text-lg font-medium leading-9'>{items.detail}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Students;
