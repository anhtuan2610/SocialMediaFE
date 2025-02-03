import avatar from "../../assets/home-icon/mubark-image.jpg";
import optionPost from "../../assets/home-icon/option-button-post.svg";

export default function ListFriend() {
  return (
    <div className="max-w-full w-fit">
      <div className="flex justify-between">
        <p className="font-bold text-lg">Friends</p>
        <img src={optionPost} alt="" />
      </div>
      <div className="flex items-center gap-4 overflow-hidden whitespace-nowrap p-1 lg:p-4 lg:gap-5 rounded-2xl ">
        {Array(5)
          .fill(null)
          .map(() => (
            <div className="flex-shrink-0">
              <img
                className="rounded-full w-14 h-14 object-cover"
                src={avatar}
                alt=""
              />
            </div>
          ))}
      </div>
    </div>
  );
}
