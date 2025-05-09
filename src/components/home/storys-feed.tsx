import avatarStory from "../../assets/home-icon/avatar-story-main.jpg";
import avatarStory1 from "../../assets/home-icon/avatar-story-1.png";
import avatarStory2 from "../../assets/home-icon/avatar-story-2.png";
import avatarStory3 from "../../assets/home-icon/avatar-story-3.png";
import avatarStory4 from "../../assets/home-icon/avatar-story-4.png";
import buttonSvg from "../../assets/home-icon/next-button-story.svg";
import addSvg from "../../assets/home-icon/add-button-story.svg";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useState } from "react";
import { useTimeoutLoading } from "../../hooks/useTimeoutLoading";

export default function StorysFeed() {
  const [isLoading, setIsLoading] = useState(true);
  useTimeoutLoading({ setIsLoading });
  return (
    <div className="bg-white p-4 rounded-2xl relative">
      {isLoading && (
        <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
          <div className="flex gap-4 justify-center lg:justify-around">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <div className="w-14 h-14 lg:w-20 lg:h-20">
                    <Skeleton width="100%" height="100%" circle />
                  </div>
                  <div className="w-12 h-6 lg:w-20 lg:h-8">
                    <Skeleton />
                  </div>
                </div>
              ))}
          </div>
        </SkeletonTheme>
      )}
      <div
        className={`flex items-center gap-4 overflow-hidden whitespace-nowrap p-1 lg:p-4 lg:gap-9 max-w-full ${
          isLoading ? "hidden" : ""
        }`}
      >
        <div className="w-14 h-14 flex flex-col justify-center items-center gap-1 relative rounded-full lg:gap-2 lg:w-[5.5rem] lg:h-[5.5rem] flex-shrink-0">
          <img
            className="w-full h-full object-cover rounded-full border-2 animate-borderColorChange aspect-square"
            src={avatarStory}
            alt=""
          />
          <div className="text-xs font-semibold lg:text-base">Your Story</div>
          <div className="absolute bottom-2 -right-1 lg:bottom-5">
            <img src={addSvg} alt="" />
          </div>
        </div>
        <div className="w-14 h-14 flex flex-col justify-center items-center gap-1 lg:w-20 lg:h-20 flex-shrink-0">
          <img
            className="w-full h-full rounded-full border-blue-400 border-2 aspect-square"
            src={avatarStory1}
            alt=""
          />
          <div className="text-xs lg:text-base">User 1</div>
        </div>
        <div className="w-14 h-14 flex flex-col justify-center items-center gap-1 lg:w-20 lg:h-20 flex-shrink-0">
          <img
            className="w-full h-full rounded-full border-blue-400 border-2 aspect-square"
            src={avatarStory2}
            alt=""
          />
          <div className="text-xs lg:text-base">User 2</div>
        </div>
        <div className="w-14 h-14 flex flex-col justify-center items-center gap-1 lg:w-20 lg:h-20 flex-shrink-0">
          <img
            className="w-full h-full rounded-full border-blue-400 border-2 aspect-square"
            src={avatarStory3}
            alt=""
          />
          <div className="text-xs lg:text-base">User 3</div>
        </div>
        <div className="w-14 h- flex flex-col justify-center items-center gap-1 lg:w-20 lg:h-20 flex-shrink-0">
          <img
            className="w-full h-full rounded-full border-blue-400 border-2 aspect-square"
            src={avatarStory4}
            alt=""
          />
          <div className="text-xs lg:text-base">User 4</div>
        </div>
        <div className="w-14 h- flex flex-col justify-center items-center gap-1 lg:w-20 lg:h-20 flex-shrink-0">
          <img
            className="w-full h-full rounded-full border-blue-400 border-2 aspect-square"
            src={avatarStory2}
            alt=""
          />
          <div className="text-xs lg:text-base">User 5</div>
        </div>
      </div>
      <button className="rounded-full absolute bg-gray-200 w-8 h-8 flex justify-center items-center top-1/2 -right-4 -translate-y-1/2">
        <img src={buttonSvg} alt="" />
      </button>
    </div>
  );
}
