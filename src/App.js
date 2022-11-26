import "./App.css";
import img1 from "./img1.gif";

function App() {
  return (
    <div className="main">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={img1} alt="Snow" height="250px" width="500px" />
          </div>
          <div class="flip-card-back">
            <h1>⭐️Reminder⭐️</h1>

            <p>Tomorrow the Christmas season begins</p>
            <p>We love that 🎄 </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
