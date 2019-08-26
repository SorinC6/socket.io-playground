import React, { useEffect, useState } from "react";
import "./App.css";
import io from "socket.io-client";
import Chat from "./Components/Chat";

const socketUrl = "http://localhost:4001";

function App() {
  const [socketIo, setSocketIo] = useState(null);
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    initSocket();
  }, []);

  const initSocket = () => {
    const socket = io(socketUrl);
    socket.on("connect", () => {
      console.log("Connected React side");
    });
    setSocketIo(socket);
  };
  return (
    <div className="App">
      <h1>Socket.io Chat</h1>
      <form onSubmit={e => e.preventDefault()}>
        <label>Your awesome nickname</label>
        <input
          placeholder="enter your ninkname"
          onChange={e => setNickname(e.target.value)}
        />
      </form>
      <Chat socket={socketIo} nickname={nickname} />
    </div>
  );
}

export default App;
