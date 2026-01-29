const ProjectCard = ({
  title,
  description,
  skills,
  image,
  bg,
  githubLink,
  layout,
  reverse,
}) => {
  const isHalf = layout === "half";

  return (
    <div className={`w-full relative ${isHalf ? "w-full sm:w-1/2 p-2" : "w-full"}`}>
      <div className="hidden min-[653px]:block">
        <img src={bg} alt={title} className="w-full object-cover" />

        <div
          className={`
            absolute inset-0
            ${
              isHalf
                ? "flex flex-col justify-center 2xl:pl-16 xl:pl-16 xl:pr-12 sm:pl-10 sm:pr-4"
                : "flex justify-center pr-8 items-center"
            }
            ${reverse ? "flex-row-reverse 2xl:pl-20 sm:pl-8 sm:pr-0" : "flex-row"}
          `}
        >
          {!isHalf && <div className="w-1/5"></div>}

          <div
            className={`
              flex flex-col
              ${isHalf ? "" : "w-2/4 justify-center"}
              ${reverse ? "2xl:pl-16 xl:pl-14 sm:pl-6" : ""}
            `}
          >
            <div className="text-purple-1000 2xl:text-[40px] xl:text-[36px] lg:text-[30px] sm:text-[20px] font-bold">
              {title}
            </div>

            <div
              className={`
                text-white
                2xl:text-[20px] xl:text-[16px] lg:text-[14px] sm:text-[10px]
                my-2
                ${reverse ? "" : "2xl:pr-20 sm:pr-4"}
              `}
            >
              {description}
            </div>

            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <button
                  className="
                    bg-yellow-1000 font-semibold
                    text-[9px]
                    sm:text-[10px]
                    lg:text-[12px]
                    xl:text-[15px]
                    2xl:text-[17px]
                    px-4 py-1
                    sm:px-5 sm:py-1 sm:my-2
                    lg:px-6 lg:py-1.5
                    xl:px-7 xl:py-2 xl:my-4
                    2xl:px-8 2xl:py-2 2xl:my-6
                    rounded-xl my-4
                  "
                >
                  LEARN MORE
                </button>
              </a>
            )}

            <div className={`flex flex-wrap ${isHalf ? "" : "w-full"}`}>
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-purple-1100/20 text-white
                    2xl:text-[24px]
                    xl:text-[22px]
                    lg:text-[16px]
                    sm:text-[10px]
                    font-light border border-purple-1100 rounded-3xl px-5 mr-4 mb-2
                    sm:px-2 sm:mr-2
                    lg:px-3 lg:mr-3
                    xl:px-4 xl:mr-4
                    2xl:px-5 2xl:mr-5"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {!isHalf && image && (
            <div className={`flex w-2/5 justify-center items-center ${!reverse ? "2xl:pr-14" : ""}`}>
              <img src={image} className="max-w-full h-auto rounded-xl" alt="" />
            </div>
          )}
        </div>
      </div>

      <div className="block min-[653px]:hidden">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#12002a] via-[#1b0042] to-[#2a0a5a]" />
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-purple-1000/70" />
          <div className="absolute -top-16 -right-16 w-[240px] h-[240px] rounded-full bg-purple-1000/15 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-[260px] h-[260px] rounded-full bg-purple-1100/15 blur-3xl" />

          <div className="relative p-4 pt-5 pb-6">
            <h3 className="text-purple-1000 font-bold text-[22px] leading-tight">
              {title}
            </h3>

            <p className="mt-2 text-white/90 text-[14px] leading-relaxed">
              {description}
            </p>

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-4 inline-flex w-full items-center justify-center
                  bg-yellow-1000 text-black font-semibold
                  text-[12px]
                  py-3 rounded-xl
                  active:scale-[0.99] transition
                "
              >
                LEARN MORE
              </a>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    bg-purple-1100/20 text-white border border-purple-1100/70
                    rounded-full px-3 py-1
                    text-[11px]
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

            {image && (
              <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <div className="relative aspect-video">
                  <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="h-5" />
      </div>
    </div>
  );
};

export default ProjectCard;
