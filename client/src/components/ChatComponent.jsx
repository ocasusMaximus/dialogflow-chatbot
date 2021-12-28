import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import "../styles/ChatComponentStyle.css";
const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const ChatComponent = () => {
  const [Message, setMessage] = useState("");

  return (
    <div className="chat-container">
      <div className="chat-head">
        <div style={{ ...center }}>
          <h5> Zara </h5>
        </div>
      </div>
      <div className="chat-body">
        <ul className="chat-window">
          <li>
            <div className="chat-card">
              <p>Hi there, welcome to our Agent</p>
            </div>
          </li>
        </ul>
        <hr style={{ background: "#fff" }} />
        <form onSubmit={(e) => {}} className="input-container">
          <input
            className="input"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={Message}
            placeholder="Begin a conversation with our agent"
          />
          <div className="send-btn-ctn">
            <div className="hover" onClick={() => {}}>
              <AiOutlineSend />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatComponent;
