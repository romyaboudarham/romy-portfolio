import React from 'react';
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center lg:text-left">
                <h1 className="mb-4 text-3xl lg:text-4xl font-extrabold">
                    Romy Aboudarham
                </h1>
                <p className="text-base sm:text-lg lg:text-xl mb-6">
                I'm a creative technologist driven by the power of storytelling and innovation. 
                I merge art and technology to design immersive, impactful experiences that resonate deeply. 
                By leveraging cutting-edge tools in Augmented and Virtual Reality, I craft interactions that
                seeks to not lose site of the physical world we live in, prioritizing the body of the person experiencing the art.
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#ff6562] hover:bg-[#db5654] text-white">Let's Connect</button>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-[#db5654] hover:text-white border border-[#ff6562] mt-3">Download CV</button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="w-[215px] h-[215px] lg:w-[300px] lg:h-[300px] overflow-hidden rounded-full relative">
                    <Image
                        src="/images/romy.png"
                        alt="Romy Headshot"
                        width={300}
                        height={300}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection