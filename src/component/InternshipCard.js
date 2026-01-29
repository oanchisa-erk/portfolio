const InternshipCard = ({ title, description, bg, detailImage, rightImage, link }) => {
  return (
    <section className="relative w-full mt-12 sm:mt-16 md:mt-20">
      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2">
        <img src={bg} alt="" className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-[52%]">
            <p className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
              Internship (Software Engineer)
            </p>

            <h3 className="mt-1 text-purple-1000 font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[42px] 2xl:text-[54px]">
              {title}
            </h3>

            <div className="mt-5 sm:mt-6">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl">
                <img
                  src={detailImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/55" />

                <div className="relative p-4 sm:p-5 md:p-6 lg:p-7">
                  <ul className="list-disc list-inside space-y-2 sm:space-y-2.5 text-white/95 text-xs sm:text-sm md:text-[15px] lg:text-base leading-relaxed">
                    {description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-4 sm:mt-5 inline-flex items-center justify-center
                      w-full sm:w-auto
                      bg-yellow-1000 text-black font-semibold
                      text-xs sm:text-sm md:text-[13px] lg:text-sm
                      px-5 py-3 rounded-xl
                      hover:opacity-90 active:scale-[0.99]
                      transition
                    "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[48%]">
            <div className="lg:hidden">
              <img
                src={rightImage}
                alt={title}
                className="w-full rounded-2xl shadow-2xl border border-white/10"
              />
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-purple-1300/60 blur-xl" />
                <div className="relative rounded-3xl bg-purple-1300 p-3">
                  <div className="relative aspect-video overflow-hidden rounded-2xl">
                    <img
                      src={rightImage}
                      alt={title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-12">
          <hr className="w-full border-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default InternshipCard;
