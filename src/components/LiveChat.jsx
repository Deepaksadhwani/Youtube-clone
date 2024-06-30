import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('api polling ')
        }, 2000)

        return () => clearInterval(interval)
    }, [])

  return (
    <div className="m-1 ml-2 h-[600px] rounded-lg border border-black bg-gray-100 p-2">
      <ChatMessage name ="Deepak sadhwani" message="This is weTube live chat."/>
    </div>
  );
};

export default LiveChat;
