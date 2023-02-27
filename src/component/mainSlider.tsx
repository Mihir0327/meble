import { Carousel } from "react-bootstrap"
import { SetStateAction, useState } from 'react'




const dataSlider = [{
    title: 'LOW PRICES AND BEST QUALITY',
    subTitle: '',
    describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laboriosam possimus odio sapiente nostrum nam numquam neque ad saepe. Nihil, tenetur delectus iusto praesentium velit rerum dolor minus natus obcaecati!",
    link: '',
    img: '/slider-img-2.png'
}, {
    title: 'NEW DECO FURNITURE',
    subTitle: '',
    describe: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, accusantium omnis impedit aspernatur sapiente architecto animi odit dolore vitae deleniti ipsum! Ipsa architecto, repudiandae vitae porro delectus voluptate facilis illum exercitationem asperiores. Repudiandae voluptatem enim animi iusto nesciunt perspiciatis iste tempora numquam? Vel?",
    link: '',
    img: '/slider-img-2.png'
}, {
    title: 'NEW DECO FURNITURE',
    subTitle: '',
    describe: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, nam. Labore iste ipsam, earum sint itaque placeat cupiditate soluta odio corrupti. Aliquid, magni?",
    link: '',
    img: '/slider-img-2.png'
}]






const MainSlider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <section className="banner overflow-hidden z-0">
                <div className="slider" id="banner-slider">
                <Carousel nextLabel="" prevLabel="" >

                        {dataSlider.map((data, index) => {
                            return <Carousel.Item key={index} interval={1000}  >
                                <div className="slide relative ">
                                    <img src={data.img} alt="" className="w-[100%] h-[500px]  lg:h-[60%] " />
                                    <div
                                        className="innerbox absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] text-white z-[2] ">
                                        <div className="title text-[15px] font-[200] mb-[20px] text-center md:text-[22px] md:mb-[15px] lg:text-[30px] lg:mb-[10px] md:font-[300]">
                                            {data.title}
                                        </div>
                                        <div className="bold-title text-[25px] font-[500] mb-[10px] text-center md:text-[20px] md:mb-[15px] lg:text-[30px] lg:font-[600] lg:mb-[20px] ">
                                            {data.subTitle}
                                        </div>
                                        <div className=" text-center text-[12px] sm:font[100]  md:font[200] md:text-[15px] lg:text-[18px] lg:font-[400]">
                                            <p>{data.describe}</p>
                                        </div>
                                        <div className="orderNow flex justify-center mt-[5rem] lg:mt-[10rem]">
                                            <button className="bg-yellow-500 text-2xl p-2 font-semibold">Order Now</button>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        })}

                    </Carousel>
                </div>
            </section>

        </>
    )
}
export default MainSlider