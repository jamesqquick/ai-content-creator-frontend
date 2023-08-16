import React from 'react';
import placeholder from '../../public/placeholder.png';
import Image from 'next/image';
interface TweetProps {
  text: string;
}
export default function Tweet({ text }: TweetProps) {
  return (
    <div className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border max-w-xl">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image
            src={placeholder}
            className="h-11 w-11 rounded-full"
            alt="placeholder profile image"
          />
          <div className="ml-1.5 text-sm leading-tight">
            <span className="text-black dark:text-white font-bold block ">
              Content Creator
            </span>
            <span className="text-gray-500 dark:text-gray-400 font-normal block">
              @contentcreator
            </span>
          </div>
        </div>
      </div>
      <p className="text-black dark:text-white block text-xl leading-snug mt-3">
        {text}
      </p>

      <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">
        10:05 AM · Dec 19, 2020
      </p>
      <div className="text-gray-500 dark:text-gray-400 flex mt-3">
        <div className="flex items-center mr-6">
          <svg
            viewBox="0 0 24 24"
            className="fill-current h-5 w-auto r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
          >
            <g>
              <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
