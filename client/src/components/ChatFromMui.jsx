import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, Avatar } from "@chatscope/chat-ui-kit-react";
import TypingIndicator from "@chatscope/chat-ui-kit-react/dist/cjs/TypingIndicator";
import avatarBot from "../img/chatbotAvatar.jpg";
import { useEffect } from "react";
import { toJS } from "mobx";

const handleSend = (text) => {};

export function Chat(props) {
  const { handleConversation, agentMessages, isLoadingChatMessages } = props.ApplicationStore;

  useEffect(() => {
    handleConversation();
    return () => handleConversation();
  }, []);

  const data = toJS(agentMessages);
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            <Message
              model={{
                message: "Hello! Nice to meet you!",
                sentTime: "just now",
                direction: "incoming",
                sender: "Chatbot",
              }}
            >
              <Avatar name={"Bot"} src={avatarBot} status="available"></Avatar>
            </Message>
            <Message
              model={{
                message: "Hey",
                sentTime: "just now",
                direction: "outgoing",
                sender: "Joe",
              }}
            ></Message>
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={handleSend} />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}
