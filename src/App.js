import React, { useEffect } from "react";
import "./App.css";
import io from "socket.io-client";

const socketUrl = "http://localhost:4001";

function App() {
  useEffect(() => {
    initSocket();
  }, []);

  const initSocket = () => {
    const socket = io(socketUrl);
    socket.on("connect", () => {
      console.log("Connected React side");
    });
  };
  return (
    <div className="App">
      <h1>Socket.io Chat</h1>
    </div>
  );
}

export default App;
