import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, Avatar } from "@chatscope/chat-ui-kit-react";
import TypingIndicator from "@chatscope/chat-ui-kit-react/dist/cjs/TypingIndicator";
import madmonqAvatarBot from "../img/madmonqBotAvatar.png";
import pepega from "../img/pepega.png";
import { useEffect } from "react";
import { toJS } from "mobx";
import { inject, observer } from "mobx-react";

export function Chat(props) {
  const { handleConversation, agentMessages, isLoadingChatMessages } = props.ApplicationStore;
  // useEffect(() => {
  //   handleConversation();
  // }, []);

  const data = toJS(agentMessages);
  console.log(data.length);
  // console.log(msg);
  return (
    <div style={{ position: "relative", height: "70vh", backgroundColor: "#10141a" }}>
      <MainContainer style={{ border: "none" }}>
        <ChatContainer>
          <MessageList
            style={{ backgroundColor: "#10141a", border: "none" }}
            typingIndicator={
              isLoadingChatMessages && <TypingIndicator style={{ backgroundColor: "#10141a", border: "none" }} content="Chatbot is typing" />
            }
          >
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
                    <Message.CustomContent style={{ backgroundColor: "#f01957" }}>{fulfillmentText}</Message.CustomContent>

                    <Avatar src={madmonqAvatarBot} status="available"></Avatar>
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
                  >
                    <Avatar src={pepega} status="available"></Avatar>
                  </Message>
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
            style={{ backgroundColor: "#1d232e", border: "none" }}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}

export default inject("ApplicationStore")(observer(Chat));
