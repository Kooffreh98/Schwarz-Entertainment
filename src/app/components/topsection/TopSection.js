import "./section1.scss";
import Image from "next/image";


const TopSection = () => {
    return (
        <section id="home" className="top-section">
            <div className="flex flex-wrap pb-24 pt-32 px-20 gap-20 md:justify-center sm:justify-center">
                <div className="max-w-[353px] p-8 bg-black">
                    <div className="flex flex-col justify-center items-center">
                      <Image className="mb-4" src="/images/se logo 2 1.svg" alt="schwarz entertainment logo" width={141} height={69} />
                      <Image className="mb-4" src="/images/se logo 2 2.svg" alt="schwarz entertainment logo" width={175} height={54} />
                      <p className="text-white text-xs md:text-sm lg:text-base font-medium text-center">
                         Imagine a world where raw talent finds its spark, 
                         igniting exceptional entertainment experiences 
                         that leave a lasting impact.
                      </p>
                    </div>
                </div>

                <div className="overflow-hidden w-[566px]">
                  <iframe className="w-full" height="315" 
                  src="https://www.youtube.com/embed/Rhs2qg5xyiQ?si=VrQO0NzlbDCg8JDd" 
                  title="YouTube video player" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

        </section>
    );
};

export default TopSection;