import { IoMdDownload } from "react-icons/io";

const DownloadResume = () => {
  return (
    <div className="flex">
      <a
        href="https://drive.google.com/uc?export=download&id=1ZPDIPx_UObC2nJ2Lq7fV7M2UzbHUoulA"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-yellow-1000 text-black font-semibold 
          px-3 py-1.5 sm:px-4 sm:py-2 
          text-xs sm:text-sm md:text-base
          rounded-xl hover:brightness-110 transition
          w-full sm:w-auto justify-center sm:justify-start"
      >
        <IoMdDownload className="text-base sm:text-lg md:text-xl" />
        <span className="hidden sm:inline">Download Resume</span>
        <span className="sm:hidden">Download</span>
      </a>
    </div>
  );
};

export default DownloadResume;
