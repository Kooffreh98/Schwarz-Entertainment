import "./comp.scss";
import Heading from "./Heading";

const VideosSection = () => {
    return (
        <section id="videos" className="videos-section">

            <Heading text="Videos" />

            <div className="flex flex-wrap gap-8 py-8 px-8 justify-center">
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

export default VideosSection;