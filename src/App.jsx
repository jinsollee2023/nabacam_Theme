import "./reset.css";

import Router from "./shared/Router";

function App() {
  document.body.style.maxWidth = "1200px";
  document.body.style.minWidth = "800px";
  document.body.style.margin = "0 auto 0 auto";
  return <Router></Router>;
}

export default App;
