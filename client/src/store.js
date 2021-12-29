// store.js

import Axios from "axios";
import { action, observable, makeObservable } from "mobx";

const ENDPOINT = process.env.REACT_APP_DATA_API_URL;

class ApplicationStore {
  constructor() {
    makeObservable(this, {
      isLoadingChatMessages: observable,
      agentMessages: observable,
      handleConversation: action,
    });
  }

  isLoadingChatMessages = false;

  agentMessages = [];

  handleConversation = (message) => {
    this.isLoadingChatMessages = true;
    if (message) {
      this.agentMessages.push({ userMessage: message });
    }

    Axios.post(`${ENDPOINT}/api/agent/text-input`, {
      message: message || "Hi",
    })
      .then((res) => {
        this.agentMessages.push(res.data.data[0].queryResult);
        this.isLoadingChatMessages = false;
      })
      .catch((e) => {
        this.isLoadingChatMessages = false;
        console.log(e);
      });
  };
}

export const store = new ApplicationStore();
