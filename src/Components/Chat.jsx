import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Chat = ({ socket, nickname, setMessage, message, serverMessage }) => {
  const [allMessages, setAllMessages] = useState([]);
  console.log("ChatContent ", serverMessage);
  const handleSend = () => {
    console.log("send");
    console.log(message, nickname);
    socket.emit("CHAT_MESSAGE", {
      message,
      nickname
    });
  };
  useEffect(() => {
    setAllMessages(allMessages.concat(serverMessage));
  }, []);

  return (
    <div>
      <Display>
        <p>Display messages</p>
        {allMessages &&
          allMessages.map(item => {
            console.log(item);
            return (
              <p>
                {item.nickname} : {item.message}
              </p>
            );
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
