import Image from "next/image";
import Heading from "../Heading";
import "./section1.scss";


const SecondSection = () => {
    return (
        <>
            <Heading 
              text="Manage your entire community in a single system"
            />

            <div className="container1 pb-24">
              <div className="flex flex-wrap justify-around items-center pb-4 text-center">
                 <div className="max-w-[211px] py-4 px-4 box">
                      <Image className="ml-20 pb-1" src="/images/Iconuser.svg" alt="user icon" width={32} height={29}/>
                      <p className="text-center text-sm font-bold pb-1">Talent Identification Programmes</p>
                      <span className="text-center text-xs font-normal">
                        National/Regional Scouting Tours: Organising talent search tours across
                      </span>
                 </div>

                 <div className="max-w-[211px] py-4 px-4 box">
                     <Image className="ml-20 pb-1" src="/images/Iconmic.svg" alt="user icon" width={32} height={29}/>
                      <p className="text-center text-sm font-bold pb-1">Open Mics/Showcase Events</p>
                      <span className="text-center text-xs font-normal">
                         Regular open mic nights and showcase events at local venues
                      </span>
                 </div>

                 <div className="max-w-[211px] py-4 px-4 box">
                     <Image className="ml-20 pb-1" src="/images/Icon.svg" alt="user icon" width={32} height={29}/>
                      <p className="text-center text-sm font-bold pb-1">Artist Development Programmes</p>
                      <span className="text-center text-xs font-normal">
                         Regular programmes to help artist develop their talents
                      </span>
                 </div>

              </div>

              <div className="flex flex-wrap justify-around items-center text-center">
                 <div className="max-w-[211px] py-4 px-4 box">
                      <Image className="ml-20 pb-1" src="/images/mentor.svg" alt="user icon" width={32} height={29}/>
                      <p className="text-center text-sm font-bold pb-1">Mentorship Programs</p>
                      <span className="text-center text-xs font-normal">
                         Pairing  established artists with mentees for guidance and skill development.
                      </span>
                 </div>

                 <div className="max-w-[211px] py-4 px-4 box">
                     <Image className="ml-20 pb-1" src="/images/Iconmasterclass.svg" alt="user icon" width={32} height={29}/>
                      <p className="text-center text-sm font-bold pb-1">Workshops and Masterclasses</p>
                      <span className="text-center text-xs font-normal">
                         Organize workshops led by industry professionals on various artistic disciplines 
                         (acting, music production, filmmaking).
                      </span>
                 </div>

                 <div className="max-w-[211px] py-4 px-4 box">
                     <Image className="ml-20 pb-1" src="/images/Iconpresent.svg" alt="user icon" width={32} height={29}/>
                      <p className="text-center text-sm font-bold pb-1">Content Production and Presentation</p>
                      <span className="text-center text-xs font-normal">
                         Our membership management content creation, including artist showcases, 
                         filmed performances, or original productions.
                      </span>
                 </div>

              </div>
             
            
            </div>
        </>
    );
}

export default SecondSection;