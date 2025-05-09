import Lottie from "lottie-react";
import { MessageCircle } from "lucide-react";
import chatbotAnimation from "../../../../public/json-animations/chatbot.json";
import { useEffect, useState } from "react";

const ChatbotWinDow = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const messages = [
    "Welcome to LeoMessi - Social Media",
    "I'm AI assistant, how can I help you?",
    "I support your problem",
  ];

  useEffect(() => {
    const typingSpeed = 80;
    const deletingSpeed = 50;
    const pauseTime = 1500;

    if (!deleting && text === messages[index]) {
      setTimeout(() => setDeleting(true), pauseTime);
      return;
    }

    const handleTyping = setTimeout(
      () => {
        if (!deleting) {
          // Hiệu ứng gõ chữ từng ký tự từ phải sang trái
          setText((prev) => messages[index].substring(0, prev.length + 1));
        } else {
          // Hiệu ứng xóa chữ từng ký tự từ phải sang trái
          setText((prev) => messages[index].substring(0, prev.length - 1));
          if (text === "") {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % messages.length);
          }
        }
      },
      deleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(handleTyping);
  }, [text, deleting, index]);

  return (
    <div className="flex items-center space-x-4">
      {/* Hộp chat tự động co giãn */}
      <div
        className="relative flex items-center space-x-2 px-4 py-2 w-auto max-w-[400px] 
                      bg-gradient-to-r from-blue-500 to-indigo-500 text-white 
                      rounded-2xl shadow-lg backdrop-blur-lg opacity-90 overflow-hidden"
      >
        {/* Icon chatbot */}
        <MessageCircle className="w-5 h-5 text-white" />
        {/* Nội dung chat */}
        <div className="text-lg font-medium text-right whitespace-nowrap transition-all duration-200">
          {text}
          <span className="animate-blink">|</span>
        </div>
      </div>

      {/* Biểu tượng chatbot */}
      <Lottie
        className="w-24 h-24 hidden lg:block"
        animationData={chatbotAnimation}
      />
    </div>
  );
};

export default ChatbotWinDow;
