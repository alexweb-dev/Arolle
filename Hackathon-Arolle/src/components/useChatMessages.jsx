import { useState } from "react";

function UseChatMessages() {
  const prompts = [
    "What's your age?",
    "Do you have any allergies?",
    "What are you looking for?",
    "What type of product are you looking for?",
    "What type of facial product are you looking for ?",
    "What’s your skin color ?",
    "What’s your skin type ?",
    `According to your answers, here are some products that may suit you`,
  ];
  const [messages, setMessages] = useState([prompts[0]]);

  const addMessage = (message) => {
    setMessages((prevMessages) => {
      return [...prevMessages, message];
    });
  };

  return { messages, addMessage, prompts };
}

export default UseChatMessages;
