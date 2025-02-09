import React from 'react';
import bannerImg from '../../assets/banner.jpg';
const Banner = () => {
    return (
        <div className='bg-[#9538E2]'>
            <div className="hero  min-h-screen lg:relative static ">
                <div className="hero-content text-center text-white">
                    <div className="">
                        <h1 className="lg:text-5xl text-3xl font-bold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn bg-white text-[#9538E2]">Shop Now</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center lg:absolute lg:-bottom-140 lg:left-30 p-6 rounded-3xl'>

            <img className='lg:w-[1062px] lg:h-[600px] w-full h-full object-cover rounded-3xl lg:border-8 border-amber-50' src={bannerImg} alt="" />

            </div>
        </div>
    );
};

export default Banner;