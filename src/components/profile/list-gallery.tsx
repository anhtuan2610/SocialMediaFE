import gallery from "../../assets/profile/gallery.jpg";
import optionPost from "../../assets/home-icon/option-button-post.svg";

export default function ListGallery() {
  return (
    <div>
      <div className="flex justify-between">
        <p className="font-bold text-lg">Gallery</p>
        <img src={optionPost} alt="" />
      </div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        <img className="rounded-xl" src={gallery} alt="" />
        <img className="rounded-xl" src={gallery} alt="" />
        <img className="rounded-xl" src={gallery} alt="" />
        <img className="rounded-xl" src={gallery} alt="" />
        <img className="rounded-xl" src={gallery} alt="" />
        <img className="rounded-xl" src={gallery} alt="" />
      </div>
    </div>
  );
}
