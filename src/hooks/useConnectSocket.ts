// src/hooks/useSocket.ts
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const useSocket = (serverUrl: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    console.log("useSocket");
    const socket = io(serverUrl);
    socket.on("connection", () => {
      console.log("connection socket id: ", socket.id);
    });
    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, [serverUrl]);

  return socket;
};

export default useSocket;
