import "./App.css";
import UseChatMessages from "./components/useChatMessages";

function App() {
  const { addMessages } = UseChatMessages();
  const prompts = [
    "What's your age?",
    "What are you looking for?",
    "What type of product are you looking for?",
  ];
  const answers = [
    ["Between 18 and 25", "Between 25 and 40", "Between 40 and 60"],
    ["Make up", "Skin care"],
    ["Nail products", "Facial products", "Lip products", "Eye products"],
  ];

  addMessages(prompts[0]);
  addMessages(answers[0]); 
  addMessages(prompts[1]);
  addMessages(answers[1]); 
  addMessages(prompts[2]);
  addMessages(answers[2]); 

  return (
    <>
      <h1>Vite + React</h1>
      <div className="chat-container">
        {addMessages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </>
  );
}

export default App;
