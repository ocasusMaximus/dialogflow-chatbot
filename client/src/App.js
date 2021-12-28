import "./App.css";
import { Chat } from "./components/ChatFromMui.jsx";
import { Provider } from "mobx-react";
import { store } from "./store.js";
function App() {
  return (
    <Provider ApplicationStore={store}>
      <div className="App">
        <Chat></Chat>
      </div>
    </Provider>
  );
}

export default App;
