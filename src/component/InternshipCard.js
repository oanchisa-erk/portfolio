const InternshipCard = ({
  title,
  description,
  bg,
  detailImage,
  rightImage,
  link,
}) => {
  return (
    <div className="w-full relative top-0 left-0  mt-20">
      <div className="flex justify-end">
        <img src={bg} className="w-1/2 h-auto" />
      </div>

      {/* MOBILE: flex-col | DESKTOP: flex-row */}
      <div
        className="
    relative w-full
    inset-0 lg:absolute
    flex sm:flex-col sm:-mt-[380px]
    lg:flex-row lg:mt-0
    items-center lg:items-start
  "
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center w-full lg:w-auto px-6 lg:px-0 sm:mb-10">
          <div
            className="text-white
            2xl:text-[28px] xl:text-[24px] lg:text-[22px] md:text-[20px]
            sm:text-[18px] text-[16px] font-semibold"
          >
            Internship (Software Engineer)
          </div>

          <div
            className="text-purple-1000
            2xl:text-[54px] xl:text-[48px] lg:text-[42px]
            md:text-[36px] sm:text-[32px] text-[28px]
            font-bold"
          >
            {title}
          </div>

          <div className="relative w-full inline-block object-cover z-10 mt-4">
            <img
              src={detailImage}
              className="opacity-70 w-full
                2xl:h-[300px] xl:h-[260px] lg:h-[240px]
                md:h-[90%] sm:h-[220px]"
            />

            <div
              className="absolute inset-0 flex flex-col justify-center text-white
                2xl:text-[20px] xl:text-[18px] lg:text-[16px]
                md:text-[15px] sm:text-[14px] text-[13px]
                font-medium px-8 py-10"
            >
              <ul className="list-disc list-inside space-y-3">
                {description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <button
                className="w-1/3 bg-yellow-1000 font-semibold
                  2xl:text-[17px] xl:text-[15px] lg:text-[14px]
                  md:text-[14px] sm:text-[13px] text-[12px]
                  text-black py-2 px-8 rounded-xl mt-8"
              >
                <a href={link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE (DESKTOP) */}
        <div
          className="
          hidden lg:block
          absolute -translate-y-1/2
          2xl:right-20 2xl:top-1/4
          xl:right-20 xl:top-1/4
          lg:pr-18 lg:right-20 lg:top-1/4
        "
        >
          <div
            className="relative 
            2xl:w-[540px] 2xl:h-[315px]
            xl:w-[500px] xl:h-[315px]
            lg:w-[460px] lg:h-[245px]
            bg-purple-1300 rounded-2xl"
          ></div>

          <img
            src={rightImage}
            alt={title}
            className="absolute 
              2xl:w-[560px]
              xl:w-[540px]
              lg:w-[460px]
              inset-0 rounded-2xl translate-x-10 translate-y-10"
          />
        </div>

        {/* RIGHT IMAGE (MOBILE/TABLET <=1023px) */}
        <div className="lg:hidden flex justify-center w-full">
          <img
            src={rightImage}
            alt={title}
            className="w-[60%] rounded-2xl shadow-xl"
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-auto mt-10">
        <hr className="w-full border-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
      </div>
    </div>
  );
};

export default InternshipCard;
