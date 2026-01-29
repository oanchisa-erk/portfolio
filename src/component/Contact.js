import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        relative 
        flex flex-col 
        font-inter 
        text-white
        px-6 sm:px-10 lg:px-16
        py-16 sm:py-20 lg:py-24
        scroll-mt-24
        font-inter
      "
    >
      <div className="
        font-bold
        text-[36px] 
        sm:text-[44px] 
        md:text-[52px] 
        lg:text-[60px] 
        xl:text-[64px] 
        2xl:text-[68px]
        pb-6
      ">
        Contact
      </div>

      <div className="
        flex flex-col 
        gap-4
        sm:gap-6 
        md:gap-8 
        md:flex-row 
        md:justify-between
        text-[14px]
        sm:text-[15px]
        md:text-[16px]
        lg:text-[20px]
        xl:text-[22px]
        2xl:text-[24px]
      ">
        <div className="
          flex items-center 
          gap-2
          sm:gap-3 
          md:gap-4
        ">
          <MdOutlineEmail className="
            text-yellow-1000
            text-[20px]
            sm:text-[24px]
            md:text-[28px]
            lg:text-[30px]
            xl:text-[32px]
            2xl:text-[34px]
            flex-shrink-0
          " />
          <a href="mailto:Oanchisa.nn@gmail.com" className="hover:underline break-all sm:break-normal">
            Oanchisa.nn@gmail.com
          </a>
        </div>

        <div className="
          flex items-center 
          gap-2
          sm:gap-3 
          md:gap-4
        ">
          <FaPhoneAlt className="
            text-yellow-1000
            text-[20px]
            sm:text-[24px]
            md:text-[28px]
            lg:text-[30px]
            xl:text-[32px]
            2xl:text-[34px]
            flex-shrink-0
          " />
          <span>+66 625-301-526</span>
        </div>

        <div className="
          flex items-center 
          gap-2
          sm:gap-3 
          md:gap-4
        ">
          <FaInstagram className="
            text-yellow-1000
            text-[20px]
            sm:text-[24px]
            md:text-[28px]
            lg:text-[30px]
            xl:text-[32px]
            2xl:text-[34px]
            flex-shrink-0
          " />
          <a
            href="https://www.instagram.com/onegvbxd_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Onegvbxd_
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
