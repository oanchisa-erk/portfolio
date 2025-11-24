import { IoMdDownload } from "react-icons/io";

const DownloadResume = () => {
  return (
    <div className="flex">
      <a
        href="https://drive.google.com/uc?export=download&id=1ZPDIPx_UObC2nJ2Lq7fV7M2UzbHUoulA"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-yellow-1000 text-black font-semibold px-4 py-2 rounded-xl hover:brightness-110 transition"
      >
        <IoMdDownload />
        Download Resume
      </a>
    </div>
  );
};

export default DownloadResume;
