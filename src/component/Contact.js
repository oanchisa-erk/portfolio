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
      {/* Title */}
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

      {/* Contact Items */}
      <div className="
        flex flex-col 
        gap-6 
        sm:gap-8 
        md:flex-row 
        md:justify-between
        text-[15px]
        sm:text-[16px]
        md:text-[16px]
        lg:text-[20px]
        xl:text-[22px]
        2xl:text-[24px]
      ">
        {/* Email */}
        <div className="
          flex items-center 
          gap-3 
          sm:gap-4
        ">
          <MdOutlineEmail className="
            text-yellow-1000
            text-[24px]
            sm:text-[28px]
            md:text-[30px]
            lg:text-[32px]
            xl:text-[34px]
          " />
          <a href="mailto:Oanchisa.nn@gmail.com" className="hover:underline">
            Oanchisa.nn@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="
          flex items-center 
          gap-3 
          sm:gap-4
        ">
          <FaPhoneAlt className="
            text-yellow-1000
            text-[24px]
            sm:text-[28px]
            md:text-[30px]
            lg:text-[32px]
            xl:text-[34px]
          " />
          <span>+66 625-301-526</span>
        </div>

        {/* Instagram */}
        <div className="
          flex items-center 
          gap-3 
          sm:gap-4
        ">
          <FaInstagram className="
            text-yellow-1000
            text-[24px]
            sm:text-[28px]
            md:text-[30px]
            lg:text-[32px]
            xl:text-[34px]
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
