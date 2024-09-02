import "./comp.scss";
import Image from "next/image";

const AboutSection = () => {
    return (
        <section id="about" className="about-section">
            <div className="flex flex-wrap gap-8 py-8 px-24">
                <div className="max-w-[252.4px]">
                    <Image src="/images/Rectangle 724.svg" 
                     alt="schwarz logo" width={187} height={200} 
                    />
                </div>

                <div className="max-w-[782.6px]">
                    <h3 className="font-bold text-2xl about-head pb-1">About Us</h3>
                    <p className="text-white text-sm font-normal pb-2">
                      Unleashing the Extraordinary: Welcome to Schwarz Entertainment Imagine a world where
                      raw talent finds its spark, igniting exceptional entertainment experiences that leave
                      a lasting impact. That's the vision that drives Schwarz Entertainment, a transformative
                      platform dedicated to empowering artistic excellence and fostering connections across communities.
                    </p>

                    <p className="text-white text-sm font-normal">
                      We're not just talent scouts; we're champions. We believe in the transformative power of
                      artistic expression, and we're here to cultivate a global stage where rising stars can shine.
                      Join us on a journey of discovery, where creativity meets opportunity, and artistic dreams become reality
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;