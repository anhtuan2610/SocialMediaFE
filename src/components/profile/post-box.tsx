import { useState } from "react";
import { Image, Video, Smile } from "lucide-react";

export default function PostBox() {
  const [postText, setPostText] = useState("");

  return (
    <div className="w-full mx-auto bg-white rounded-2xl shadow-lg p-4 lg:p-6">
      <h3 className="text-lg font-bold mb-4">Create a Post</h3>
      <textarea
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full border border-gray-300 rounded-lg p-3 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        rows={4}
      ></textarea>
      <div className="flex items-center justify-between mt-4">
        {/* Options (Add Image, Video, Emoji) */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
            <Image size={20} className="lg:w-6 lg:h-6" />
            <span className="text-sm lg:text-base">Photo</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
            <Video size={20} className="lg:w-6 lg:h-6" />
            <span className="text-sm lg:text-base">Video</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
            <Smile size={20} className="lg:w-6 lg:h-6" />
            <span className="text-sm lg:text-base">Emoji</span>
          </button>
        </div>
        {/* Post Button */}
        <button
          onClick={() => alert("Posted!")}
          disabled={!postText.trim()}
          className={`px-4 py-2 text-sm lg:text-lg lg:px-6 lg:py-2 lg:rounded-md font-medium text-white rounded-lg ${
            postText.trim()
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Post
        </button>
      </div>
    </div>
  );
}
