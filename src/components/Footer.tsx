const Footer = () => {
  return (
    <footer className="w-full h-[850px] mt-35 bg-[#0e382c] text-white ">
      <div className="flex">
        <div className="flex mt-30 ml-15 gap-20">
          <div>
            <img
              src="https://www.starbucks.in/assets/icon/logo.png"
              alt="logo"
            />
          </div>
          <div className="font-bold ml-17 ">
            About Us
            <div className="mt-3">
              <ul className="text-[13px] font-light space-y-2">
                <li className="py-2.5 hover:text-gray-500 cursor-pointer">
                  Our heritage
                </li>
                <li className="py-2.5 hover:text-gray-500 cursor-pointer">
                  Coffeehouse
                </li>
                <li className="py-2.5 hover:text-gray-500 cursor-pointer">
                  Our Company
                </li>
              </ul>
            </div>
          </div>
          <div className="font-bold">
            Responsiblity
            <div className="mt-3">
              <ul className="text-[13px] font-light space-y-2">
                <li className="py-2.5 hover:text-gray-500 cursor-pointer">
                  Diversity
                </li>
                <li className="py-2.5 hover:text-gray-500 cursor-pointer">
                  Community
                </li>
                <li className="py-2.5 hover:text-gray-500 cursor-pointer">
                  Ethical Sourcing
                </li>
                <li className="py-2.5 hover:text-gray-500 cursor-pointer">
                  Environmental
                </li>
                <li className="py-2.5 hover:text-gray-500 cursor-pointer">
                  Learn More
                </li>
              </ul>
            </div>
          </div>
          <div className="font-bold">
            Quick Links
            <div className="mt-3">
              <ul className="text-[13px] font-light space-y-2">
                <li className="py-2.5 hover:text-gray-500 cursor-pointer">
                  Privacy Policy
                </li>
                <li className="py-2.5 hover:text-gray-500 cursor-pointer">
                  FAQs
                </li>
                <li className="py-2.5 hover:text-gray-500 cursor-pointer">
                  Customer Service
                </li>
                <li className="py-2.5 hover:text-gray-500 cursor-pointer">
                  Delivery
                </li>
                <li className="py-2.5 hover:text-gray-500 cursor-pointer">
                  Loyalty Program
                </li>
                <li className="py-2.5 hover:text-gray-500 cursor-pointer">
                  Starbucks India Mobile
                </li>
                <li className="py-2.5 hover:text-gray-500 cursor-pointer">
                  Special Discount 25%
                </li>
                <li className="py-2.5 hover:text-gray-500 cursor-pointer">
                  Get 2x Bonus Stars
                </li>
                <li className="py-2.5 hover:text-gray-500 cursor-pointer">
                  Starbucks® Rewards
                </li>
                <li className="py-2.5 hover:text-gray-500 cursor-pointer">
                  Beverage Subscription
                </li>
              </ul>
            </div>
          </div>
          <div className="font-bold">
            Legal
            <div className="mt-3">
              <ul className="text-[13px] font-light space-y-2">
                <li className="py-2.5 hover:text-gray-500 cursor-pointer">
                  Disclaimer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* social media */}
      <div className="flex">
        <div>
          <div className="ml-15 font-semibold">SOCIAL MEDIA</div>
          {/* social media images */}
          <div className="flex">
            <img
              src="https://www.starbucks.in/assets/icon/instagram.svg"
              alt="insta"
              className="ml-15 mt-2"
            />
            <img
              src="https://www.starbucks.in/assets/icon/facebook.svg"
              alt="facebook"
              className="ml-2 mt-2"
            />
            <img
              src="https://www.starbucks.in/assets/icon/twitter.svg"
              alt="twitter"
              className="ml-2 mt-2"
            />
          </div>
        </div>
        <div>
          <img
            src="https://www.starbucks.in/assets/images/appstoreiOS.png"
            alt="AppStore"
            className="ml-20 w-45"
          />
          <img
            src="https://www.starbucks.in/assets/images/appstoreAndroid.png"
            alt="playSotre"
            className="ml-20 w-45 mt-1"
          />
        </div>
      </div>

      <div className="w-[90%] mt-12 mx-auto border-t border-gray-300"></div>
      <div className="flex justify-between">
        <div className="mt-5 ml-16 text-[11px] flex">
          <p> Web Accessiblity</p>
          <p className="ml-2">|</p>
          <p className="ml-2">Privacy Statement</p>
          <p className="ml-2"> |</p>
          <p className="ml-2">Terms of Use</p>
          <p className="ml-2">|</p>
          <p className="ml-2">Contact Us</p>
        </div>
        <div className="mt-5 text-[8px] mr-15">
          © 2025 Starbucks Coffee Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
