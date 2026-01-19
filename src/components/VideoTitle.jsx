const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-white space-y-3">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h1>
      <p className="text-sm sm:text-base text-gray-300 line-clamp-3 max-w-full sm:w-[550px]">
        {overview}
      </p>
      <div className="flex flex-wrap gap-3">
        <button className="bg-white text-black px-6 py-2 rounded">Play</button>
        <button className="bg-gray-700/60 px-5 py-2 rounded">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
