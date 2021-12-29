import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, Avatar } from "@chatscope/chat-ui-kit-react";
import TypingIndicator from "@chatscope/chat-ui-kit-react/dist/cjs/TypingIndicator";
import avatarBot from "../img/chatbotAvatar.jpg";
import { useEffect } from "react";
import { toJS } from "mobx";
import { inject, observer } from "mobx-react";

export function Chat(props) {
  const { handleConversation, agentMessages, isLoadingChatMessages } = props.ApplicationStore;
  useEffect(() => {
    handleConversation();
  }, []);

  const data = toJS(agentMessages);
  console.log(data.length);
  // console.log(msg);
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList typingIndicator={isLoadingChatMessages && <TypingIndicator content="Chatbot is typing" />}>
            {data.map(({ fulfillmentText, userMessage }, i) => (
              <div key={i}>
                {fulfillmentText && (
                  <Message
                    key={fulfillmentText}
                    model={{
                      message: fulfillmentText,
                      sentTime: "just now",
                      direction: "incoming",
                      sender: "Chatbot",
                    }}
                  >
                    <Avatar src={avatarBot}></Avatar>
                  </Message>
                )}
                {userMessage && (
                  <Message
                    key={userMessage}
                    model={{
                      message: userMessage,
                      sentTime: "just now",
                      direction: "outgoing",
                      sender: "Sender",
                    }}
                  ></Message>
                )}
              </div>
            ))}
          </MessageList>

          <MessageInput
            attachButton={false}
            placeholder="Type message here"
            onSend={(msg) => {
              handleConversation(msg);
            }}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}

export default inject("ApplicationStore")(observer(Chat));
