import { useState } from "react";

function UseChatMessages() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages((prevMessages) => {
      return [...prevMessages, message];
    });
  };

  return { messages, addMessage };
}

export default UseChatMessages;
