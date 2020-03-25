import React from "react";

class MessageList extends React.Component {
  render() {
    return (
      <div className="content">
        <div id="dummy-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          mattis orci at velit ultrices aliquet
        </div>
        <div className="messages">
          {this.props.messageList.map((newMessage, index) => (
            <div key={index} className="new-message">
              {this.props.messageList[index]}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MessageList;
