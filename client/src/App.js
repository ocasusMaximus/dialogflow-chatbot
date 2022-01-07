import "./App.css";
import { Provider } from "mobx-react";
import { store } from "./store.js";
import Chat from "./components/Chat.jsx";
import MadmonqLogo from "./img/madmonqLogo.jpg";
import "./themes/default/main.scss";
function App() {
  return (
    <Provider ApplicationStore={store}>
      <div className="App">
        <div style={{ backgroundColor: "black", width: "100%" }}>
          <img src={MadmonqLogo} alt="MadmonqLogo"></img>
        </div>
        <Chat></Chat>
      </div>
    </Provider>
  );
}

export default App;
