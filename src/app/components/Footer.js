import Input from "./Input";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="flex flex-row px-16 py-16 gap-24 text-white column">
              <div className="mt-20 mr-28 footer-div">
                  <p className="pb-4 text-sm">All rights reserved</p>
                  <a className="mr-4 mt-2 p-2 rounded-full footer-icon" href="https://www.instagram.com/schwarzentertainment?igsh=Ynp4aWN2bmRmem05https://www.instagram.com/schwarzentertainment?igsh=Ynp4aWN2bmRmem05">
                    <i className="fab fa-instagram fa-1x"></i>
                  </a>

                  <a className="mr-4 mt-2 p-2 rounded-full footer-icon" href="">
                    <i className="fab fa-brands fa-spotify fa-1x"></i>
                  </a>

                  <a className="mr-4 mt-2 p-2 rounded-full footer-icon" href="https://www.tiktok.com/@schwarzentertainment?_t=8mm0uiVIEOU&_r=1&fbclid=PAZXh0bgNhZW0CMTEAAaZfE1cXv6VfvjH7XfEV3jwuHZLzekzxtSx5Wcnt2GGSdE9k04f3Wm9qInk_aem_2F5mgrmzKQ_X0HChzC1oBwv">
                    <i className="fab fa-brands fa-tiktok fa-1x"></i>
                  </a>

                  <a className="p-2 mt-2 rounded-full footer-icon" href="https://youtube.com/@schwarzentertainment?si=wUbxWuGrjsJQ6rh">
                    <i className="fab fa-brands fa-youtube fa-1x"></i>
                  </a>
              </div>

              <div>
                  <h5 className="text-lg pb-4">Company</h5>
                  <ul>
                    <li className="text-sm mb-2"><a href="">About us</a></li>
                    <li className="text-sm mb-2"><a href="">Contact us</a></li>
                  </ul>
               </div>

               <div>
                 <h5 className="text-lg pb-4">Support</h5>
                  <ul>
                    <li className="text-sm mb-2"><a href="">Help center</a></li>
                    <li className="text-sm mb-2"><a href="">Terms of Service</a></li>
                    <li className="text-sm mb-2"><a href="">Legal</a></li>
                    <li className="text-sm mb-2"><a href="">Privacy policy</a></li>
                    <li className="text-sm mb-2"><a href="">Status</a></li>
                  </ul>
               </div>

               <div>
                   <h5 className="text-lg pb-4">Stay up to date</h5>
                   <Input 
                     placeholder="Your email address"
                     type="email"
                     name="email"
                     id="email"
                   />
               </div>

            </div>

        </footer>
    );
};

export default Footer;