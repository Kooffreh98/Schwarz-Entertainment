import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar"> 
          <div className="max-w-7xl py-5 px-20 nav-div">
              <div className="flex justify-between items-center">
                  <div className="flex flex-shrink-0">
                     <Image src="/images/se logo 2 1.svg" alt="schwarz entertainment logo" width={79} height={19} />
                     <Image src="/images/se logo 2 2.svg" alt="schwarz entertainment logo" width={123} height={12} />
                  </div>

                  <div className="hidden lg:block">
                     <span></span>
                      <div className="ml-2 flex items-center space-x-4">
                          <a className="text-white hover:bg-white hover:text-black rounded-lg p-2" href="#home">Home</a>
                          <a className="text-white hover:bg-white hover:text-black rounded-lg p-2" href="#about">About us</a>
                          <a className="text-white hover:bg-white hover:text-black rounded-lg p-2" href="#podcast">Podcasts</a>
                          <a className="text-white hover:bg-white hover:text-black rounded-lg p-2" href="#videos">Videos</a>
                          <a className="text-white hover:bg-white hover:text-black rounded-lg p-2" href="#contact">Contact us</a>
                          <button className="btn flex text-sm">
                             Join Newsletter<Image src="/images/Right.svg" alt="arrow-icon" width={15} height={15}/>
                          </button>
                      </div>
                   </div>
                    <div className="lg:hidden flex items-center">
                        <button className="inline-flex items-center justify-center p-3 rounded-md 
                         text-white lg:text-white hover:text-white focus:ring-2 focus:ring-inset focus: ring-white"
                         onClick={toggleNavbar} 
                         >
                          {isOpen? <Image className="text-white" src="/images/x icon.svg" alt="xicon" width={21} height={21}/> : 
                          <i className=" fa fa-solid fa-bars fa-2x"></i> }
                        </button>
                    </div>
              </div>
          </div>

          {isOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                 <a className="text-white block hover:bg-white hover:text-black rounded-lg p-2" href="#home">Home</a>
                 <a className="text-white block hover:bg-white hover:text-black rounded-lg p-2" href="#about">About us</a>
                 <a className="text-white block hover:bg-white hover:text-black rounded-lg p-2" href="#podcast">Podcasts</a>
                 <a className="text-white block hover:bg-white hover:text-black rounded-lg p-2" href="#videos">Videos</a>
                 <a className="text-white block hover:bg-white hover:text-black rounded-lg p-2" href="#contact">Contact us</a>
                 <button className="btn flex text-sm">
                        Join Newsletter<Image src="/images/Right.svg" alt="arrow-icon" width={15} height={15}/>
                    </button>
              </div>
            </div>
          )}

        </nav>
    );

};

export default Navbar;