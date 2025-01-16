// src/hooks/useSocket.ts
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const useSocket = (serverUrl: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socket = io(serverUrl);
    socket.on("connection", () => {
      console.log("Connected to server with id:", socket.id);
    });
    socket.on("welcome", (data) => {
      console.log(data.message);
    });
    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, [serverUrl]);

  return socket;
};

export default useSocket;
