const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video pt-[27%] px-24 absolute bottom-[1px] top-4 text-white bg-gradient-to-r from-black ">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{description}</p>
      <div id="overlay_button" className="my-4">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;