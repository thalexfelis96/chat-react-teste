import React from "react";

class MyHeader extends React.Component {
  render() {
    const toggleText = this.props.darkMode
      ? "Light Mode -> ☼"
      : "Dark Mode -> ☾ ";

    return (
      <header className="header">
        <div className="chat-header">
          <p>Modelo de Chat</p>
        </div>
        <button id="night-mode" onClick={this.props.toggleModes}>
          {toggleText}
        </button>
      </header>
    );
  }
}

export default MyHeader;
