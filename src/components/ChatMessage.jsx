import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-md rounded-lg p-1 space-x-2">
      <img
        className="h-10 rounded-lg"
        src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        alt="user icon"
      />
      <div className="flex flex-col">
        <span className="font-semibold text-lg ">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
