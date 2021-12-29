import "./App.css";
import { Provider } from "mobx-react";
import { store } from "./store.js";
import Chat from "./components/Chat.jsx";
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
