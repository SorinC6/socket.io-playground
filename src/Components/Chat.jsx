import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Chat = ({ socket, nickname }) => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessage] = useState([]);

  useEffect(() => {
    socket &&
      socket.on("CHAT_MESSAGE", data => {
        console.log("Data from the Server ", data.message);
        setChatMessage(data.message);
      });
  }, []);

  const handleSend = () => {
    console.log("send");
    socket.emit("CHAT_MESSAGE", {
      message,
      nickname
    });
  };
  return (
    <div>
      <Display>
        <p>Display messages</p>
        {chatMessages.map(item => {
          console.log("Messageee", item);
        })}
      </Display>
      <InputArea>
        <input placeholder="input" onChange={e => setMessage(e.target.value)} />
        <button onClick={handleSend}>Send</button>
      </InputArea>
    </div>
  );
};

export default Chat;

const Display = styled.div`
  height: 200px;
  border: 1px solid black;
  width: 90%;
  margin: 0 auto;
`;

const InputArea = styled.div`
  border: 1px solid black;
  width: 90%;
  margin: 0 auto;
  display: flex;
  input {
    width: 70%;
    border-right: 1px solid black;
  }
  button {
    width: 30%;
  }
`;
