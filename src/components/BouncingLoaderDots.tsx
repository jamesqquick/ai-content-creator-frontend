import React from 'react';

const BouncingDotsLoader = () => {
  return (
    <div className="flex content-center gap-x-2">
      <div className="w-2 h-2 rounded-full bg-white opacity-100 animate-bounce animation-delay-0"></div>
      <div className="w-2 h-2 rounded-full bg-white opacity-100 animate-bounce animation-delay-150"></div>
      <div className="w-2 h-2 rounded-full bg-white opacity-100 animate-bounce animation-delay-500"></div>
    </div>
  );
};

export default BouncingDotsLoader;
