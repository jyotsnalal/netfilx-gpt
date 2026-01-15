import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-white space-y-3">
      <h1 className="text-4xl font-bold drop-shadow-lg">
        {title}
      </h1>

      <p className="text-base text-gray-300 drop-shadow-md line-clamp-3 leading-relaxed w-[550px]">
        {overview}
      </p>

      <div className="flex gap-3 mt-4">
        <button className="flex items-center gap-2 bg-white text-black px-9 py-2 rounded-md font-medium hover:bg-gray-200">
          Play
        </button>

        <button className="flex items-center gap-2 bg-gray-700/60 text-white px-5 py-2 rounded-md font-medium hover:bg-gray-600">
          More Info
        </button>
      </div>
    </div>
  );
};


export default VideoTitle;


