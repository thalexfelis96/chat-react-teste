import React from "react";

class TypeMessage extends React.Component {
  render() {
    return (
      <div className="message-form">
        <form className="Message-box" onSubmit={this.props.handleSubmit}>
          <input
            id="send-message-form"
            onChange={this.props.handleMessage}
            value={this.props.message}
            placeholder="Your Text Here"
          ></input>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default TypeMessage;
