import "./comp.scss";
import Heading from "./Heading";
import Input from "./Input";
import Image from "next/image";

const ContactSection = () => {
    return (
        <section id="contact" className="contact-section">

            <Heading text="Contact Us" />

            <div className="flex flex-wrap-reverse gap-24 py-8 px-24">
                <div>
                   <div className="flex gap-4 py-8 px-8 img-div">
                       <a href="https://www.facebook.com/profile.php?id=61556185265206&mibextid=ZbWKwL">
                          <Image src="/images/Facebook.svg" 
                          alt="schwarz logo" width={96} height={96} /> 
                        </a>

                      <a href="https://www.instagram.com/schwarzentertainment?igsh=Ynp4aWN2bmRmem05https://www.instagram.com/schwarzentertainment?igsh=Ynp4aWN2bmRmem05">
                         <Image src="/images/Instagram.svg" 
                         alt="schwarz logo" width={96} height={96} />
                       </a>

                      <a href="">
                         <Image src="/images/Gmail.svg" 
                         alt="schwarz logo" width={96} height={96} />
                       </a>   

                       <a href="https://youtube.com/@schwarzentertainment?si=wUbxWuGrjsJQ6rh"> 
                         <Image src="/images/Youtube.svg" 
                         alt="schwarz logo" width={96} height={96} />
                       </a>
                    </div>
                </div>

                <div className="max-w-[385px]">
                    <p className="font-semibold text-lg pb-8">Join our Newsletter</p>
                    <Input 
                     placeholder="Your email address"
                     type="email"
                     name="email"
                     id="email"
                     className="w-[193px] md:w-[300px] lg:w-[330px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;