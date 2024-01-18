import logo from "../assets/image/logo.png";
import "./mainPage.css";

function MainPage() {
  return (
    <div className="whole_page">
      <img className="logo" src={logo} alt="Logo" />
      <div className="chatbox"></div>
    </div>
  );
}

export default MainPage;
