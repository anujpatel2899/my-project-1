import logo from "./logo.svg";
import "./App.css";

const welcome = "Welcome to 30 Days Of React";
const start = "Getting Started React";
const lib = "Javascript Library";
const learn = "Anuj Patel";
const dat = "Oct 2 2020";
const tech = ["HTML", "CSS", "Javascript"];
const techformat = tech.map((t) => <li>{t}</li>);

const header = (
  <header className="bg-color">
    <h1>{welcome}</h1>
    <h2>{start}</h2>
    <p>{lib}</p>
    <p>{learn}</p>
    <p>{dat}</p>
  </header>
);
// const obj = {
//   name:'Apple'
// }

function App() {
  return (
    <div className="App">
      {header}
      <ul style={{ background: "brown", color: "white", fontSize: "30px" }}>
        {techformat}
      </ul>
      <footer className="color">
        <p>Copyright 2020</p>
      </footer>
    </div>
  );
}

export default App;
