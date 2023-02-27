

const Blogs = () => {









    const detail = [
        {
            id: 1,
            Image: "/images/interior-img-1.jpg",
            date: "17 February 2022",
            comments: "0 comments",
            title: 'MANY DESKTOP PUBLISHING PACKAGES AND WEB PAGE EDITORS',
            readMore: "READ MORE"


        },
        {
            id: 2,
            Image: "/images/interior-img-2.jpg",
            date: "25 January 2022",
            comments: "0 comments",
            title: 'ALL THE LOREM IPSUM GENERATORS ON THE INTERNET TEND',
            readMore: "READ MORE"


        },
        {
            id: 3,
            Image: "/images/interior-img-3.jpg",
            date: "20 January 2022",
            comments: "0 comments",
            title: 'LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING',
            readMore: "READ MORE"


        }
    ]

    const image = [
        {

            Image: '/images/1.png'
        },
        {
            Image: '/images/2.png'
        },
        {
            Image: '/images/3.png'
        },
        {
            Image: '/images/4.png'
        },
        {
            Image: '/images/5.png'
        }
    ]


    return (
        <div className='mb-5 mt-10 lg:mt-20'>
         <div className='text-center sm:mt-2 md:mt-1  mb-10 md:my-20'>
                <div className=' text-3xl md:text-5xl lg:text-7xl font-Cookie  text-[#6fb8c9]'>
                    Blogs
                </div>
                <div className=' text-4xl md:text-5xl font-semibold mt-5 lg:mx-[38%]'>
                    FROM THE LATEST BLOGS
                </div>
            </div>

            <div className="mx-[10%] grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">

                {
                    detail.map((detail,index) => {
                        return (



                            <div key={index} className="">
                                <div className="w-full mb-1  lg:mb-[2rem]  overflow-hidden ">



                                    <div className=" overflow-hidden w-full max-h-[550px] ">

                                        <img className=" align-middle " src={detail.Image} alt="" />
                                    </div>

                                    <div className=" lg:pt-[0.9rem]   font-semibold">
                                        <div className="text-black/[.55] text-xl lg:text-2xl  space-x-3 lg:space-x-5 py-2 lg:py-3">
                                            <span>{detail.date}</span>
                                            <span>|</span>
                                            <span>{detail.comments}</span>
                                        </div>

                                        <p className=' text-xl  lg:text-3xl  font-medium mb-3'>{detail.title}</p>

                                        <a href="" className='text-sm lg:text-xl font-normal underline '>{detail.readMore}</a>



                                    </div>




                                </div>
                            </div>

                        )
                    })
                }


            </div>

            <div className="flex justify-evenly mx-[2%] md:mx-[7%]  mt-5 lg:mt-10">
                {
                    image.map((data,index) => {
                        return (
                            <div key={index} className=''>
                                <img src={data.Image} alt="" />
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>

    )

}




export default Blogs