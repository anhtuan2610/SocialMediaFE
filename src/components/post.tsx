import avatarStory1 from "../assets/home-icon/avatar-story-1.png";
import optionPost from "../assets/home-icon/option-button-post.svg";
import image1 from "../assets/home-icon/post-image2.jpg";
import likeButton from "../assets/home-icon/like-button.svg";
import commentButton from "../assets/home-icon/comment-button.svg";
import shareButton from "../assets/home-icon/share-button.svg";
import saveButton from "../assets/home-icon/save-button.svg";

export default function Post() {
  return (
    <div className="bg-white rounded-2xl p-4 space-y-3 lg:px-8 lg:py-4">
      <div className="flex items-center gap-2">
        <img className="w-14 h-14 rounded-full" src={avatarStory1} alt="" />
        <div className="flex flex-col justify-start">
          <div className="font-bold text-lg">Twin Bee</div>
          <div className="font-semibold text-[#ACB2C1]">
            Fort William, United Kingdom
          </div>
        </div>
        <div className="ml-auto">
          <img src={optionPost} alt="" />
        </div>
      </div>
      <div className="rounded-2xl">
        <img className="w-full rounded-2xl" src={image1} alt="" />
      </div>
      <div className="flex justify-between items-center px-2 lg:px-3">
        <div className="flex items-center gap-3">
          <img src={likeButton} alt="" />
          <img src={commentButton} alt="" />
          <img src={shareButton} alt="" />
        </div>
        <div>
          <img src={saveButton} alt="" />
        </div>
      </div>
      <div className="lg:px-3">
        <span className="font-bold">Twin Bee 🐝</span> Ain't no mountain high enough, ain't no valley low enough, ain't no river wide enough, to keep me from getting to you babe.
      </div>
    </div>
  );
}
