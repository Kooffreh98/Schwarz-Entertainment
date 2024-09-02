import "./comp.scss";
import Image from "next/image";
import Heading from "./Heading";

const PodcastSection = () => {
    return (
        <section id="podcast" className="podcast-section">

            <Heading text="Podcast" />

            <div className="flex flex-wrap gap-8 py-8 px-24">
                <div className="max-w-[252.4px]">
                    <Image src="/images/Rectangle 724.svg" 
                     alt="schwarz logo" width={187} height={200} 
                    />
                </div>

                <div className="max-w-[782.6px]">
                   
                </div>
            </div>
        </section>
    );
};

export default PodcastSection;