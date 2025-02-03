const GhostAnimation = () => {
  return (
        <div
          className="ghost bg-white relative opacity-90 animate-[ghostMove_6s_ease-out_infinite] mix-blend-exclusion"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 35% 40%, #000 8%, transparent 0%), radial-gradient(ellipse at 65% 40%, #000 8%, transparent 0%), radial-gradient(ellipse at 50% 60%, #000 8%, transparent 0%)",
            borderRadius: "100% / 70% 70% 0% 0%",
            transform: "rotateZ(-90deg)",
            width: "40px", // Kích thước nhỏ hơn để khít với header
            height: "55px", // Kích thước nhỏ hơn để khít với header
          }}
        >
          <div
            className="ghost-div-1 absolute w-1/5 bg-white bottom-[-5px] left-0 rounded-tl-full"
            style={{ height: "6px" }} // Đã điều chỉnh lại chiều cao
          ></div>
          <div
            className="ghost-div-2 absolute w-1/5 bg-transparent bottom-[-2px] left-[20%] rounded-tl-full"
            style={{ height: "3px" }} // Đã điều chỉnh lại chiều cao
          ></div>
          <div
            className="ghost-div-3 absolute w-1/5 bg-white bottom-[-3px] left-[40%]"
            style={{ height: "3px" }} // Đã điều chỉnh lại chiều cao
          ></div>
          <div
            className="ghost-div-4 absolute w-1/5 bg-transparent bottom-[-3px] left-[60%] rounded-tl-full"
            style={{ height: "3px" }} // Đã điều chỉnh lại chiều cao
          ></div>
          <div
            className="ghost-div-5 absolute w-1/5 bg-white bottom-[-2px] left-[80%] rounded-tl-full"
            style={{ height: "2px" }} // Đã điều chỉnh lại chiều cao
          ></div>
        </div>
  );
}

export default GhostAnimation;
