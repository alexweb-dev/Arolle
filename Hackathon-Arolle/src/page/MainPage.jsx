import React, { useState, useEffect } from "react";
import logo from "../assets/image/logo.png";
import "./mainPage.css";
import UseChatMessages from "../components/useChatMessages";
import Slider from "../components/slider/Slider";

function MainPage() {
  const { addMessage, messages, prompts } = UseChatMessages();
  const answers = [
    ["Between 18 and 25", "Between 25 and 40", "Between 40 and 60"],
    ["Yes", "No"],
    ["Make up", "Skin care"],
    ["Nail products", "Facial products", "Lip products", "Eye products"],
    ["Foundation", "Blush", "Others"],
    ["Light", "Medium", "Dark"],
    ["Normal", "Dry", "Oily", "Combination"],
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showSlider, setShowSlider] = useState(false);

  const handleAnswerClick = (e, answer) => {
    e.stopPropagation();
    e.preventDefault();
    addMessage(answer);

    if (currentQuestionIndex <= answer.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      addMessage(prompts[currentQuestionIndex + 1]);
      console.log(currentQuestionIndex, answers.length);
    }
    if (currentQuestionIndex >= prompts.length - 2) {
      console.log(currentQuestionIndex);
      setShowSlider(true);
    }
  };

  return (
    <div className="whole_page">
      <img className="logo" src={logo} alt="Logo" />
      <div className="chatbox">
        <div className="chat-container">
          <div className="chat-exchange">
            {messages.map((message, index) => (
              <div className="chat-prompt">
                <p key={index}>{message}</p>
              </div>
            ))}
          </div>
          <div className="user-reply-container">
            {currentQuestionIndex < answers.length &&
              answers[currentQuestionIndex].map((answer, index) => (
                <div
                  className="user-answer-container"
                  onClick={(e) => handleAnswerClick(e, answer)}
                >
                  <p key={index}>{answer}</p>
                </div>
              ))}
          </div>
          {showSlider && <Slider />}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
