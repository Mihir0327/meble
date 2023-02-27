import React from 'react'
import Slider from 'react-slick'


const Card = () => {
    const settings = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,


        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            },




        ]

    }

    const item = [
        {
            Image: "/images/item-1.jpg",
            title: "ANTHENA STUDY TABLE IN...",
            text: "We don’t believe in a one size fits all approach; we believe in solutions as individual as you are. "

        },
        {
            Image: "/images/item-2.jpg",
            title: "BLACK ALUMINIUM SHADE...",
            text: "We don’t believe in a one size fits all approach; we believe in solutions as individual as you are.  "


        },
        {
            Image: "/images/item-3.jpg",
            title: "BOLIVAR UPHOLSTERED DINING...",
            text: "We don’t believe in a one size fits all approach; we believe in solutions as individual as you are.  "

        },

        {
            Image: "/images/item-4.jpg",
            title: "INDUS SWIVEL BAR STOOL IN...",
            text: "We don’t believe in a one size fits all approach; we believe in solutions as individual as you are. "

        },

        {
            Image: "/images/item-5.jpg",
            title: "ANTHENA STUDY TABLE IN...",
            text: "We don’t believe in a one size fits all approach; we believe in solutions as individual as you are. "

        }
    ]

    return (
        <div>
            <div className='relative w-[85%] mx-[10%]  '>
            
                <Slider {...settings}>
                    {
                        item.map((data,index) => {
                            return (
                                <div key={index} className="">
                                    <div className="flex  ">
                                        <img key={index} className="w-[90%]" src={data.Image} alt="" />
                                    </div>
                                    <div className='w-[90%] mt-2'>
                                        <p className="text-xl md:text-2xl lg:text-3xl font-semibold">{data.title}</p>
                                        <p className=' text-lg md:text-xl '>{data.text}</p>
                                    </div>

                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Card