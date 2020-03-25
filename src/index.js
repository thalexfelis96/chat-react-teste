import React from "react";
import ReactDOM from "react-dom";
import MyHeader from "./components/MyHeader";
import SendMessage from "./components/SendMessage";
import "./Style.css";
import MessageList from "./components/MessageList";

// const [darkMode, setDarkMode];

class App extends React.Component {
  state = {
    message: "",
    messageList: [],
    darkMode: false
  };

  handleMessage = event => {
    this.setState({
      message: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      messageList: [...this.state.messageList, this.state.message],
      message: ""
    });
    console.log(this.state);
  };

  // toggleModes = () => { this.state.darkMode ? "Light Mode -> ☼" : "Dark Mode -> ☾ ";};

  toggleDark = () => {
    this.setState({ darkMode: !this.state.darkMode });
  };

  render() {
    return (
      <div
        className={this.state.darkMode ? "chat-dark-mode" : "chat-light-mode"}
      >
        <MyHeader
          darkMode={this.state.darkMode}
          toggleModes={this.toggleDark}
        />
        <MessageList messageList={this.state.messageList} />
        <SendMessage
          message={this.state.message}
          handleMessage={this.handleMessage}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
