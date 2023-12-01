import React, { useEffect, useState } from "react";
import { SEND_ICON, UserIcon } from "../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const ChatMessages = ({ data }) => {
  const { name, message } = data;

  return (
    <div className="border m-2 mx-4 flex p-2 rounded-lg hover:bg-red-100">
      <img
        className="h-6 p-0.5 border rounded-full"
        src={UserIcon}
        alt=""
        srcset=""
      />
      <div className=" ml-2">
        <span className="font-semibold text-neutral-500 text-xs">{name}</span>
        <span className="text-neutral-600 text-sm ml-2 font-semibold">
          {message}
        </span>
      </div>
    </div>
  );
};

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="h-[500px] rounded-lg border-2">
      <div className="border-b-2 py-2 px-4">Live Chat</div>
      <div className="h-96 py-2 mx-2 flex flex-col-reverse overflow-y-scroll no-scrollbar">
        {chatMessages?.map((chat) => {
          return <ChatMessages key={chat.name} data={chat} />;
        })}
      </div>
      <div className=" border-t-2 flex px-2 py-2">
        <img className="border rounded-full p-1 h-8" src={UserIcon} alt="" />
        <form
          action=""
          className="flex items-center w-full"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessages({
                name: "Jayasimman",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          <div className=" px-2 mx-1">
            <label htmlFor="">Jayasimman</label>
            <input
              title="Jayasimman"
              type="text"
              className="border-b-2 w-full mt-1"
              placeholder="Chat..."
              value={liveMessage}
              onChange={(e) => {
                setLiveMessage(e.target.value);
              }}
            />
          </div>
          <button>
            <img src={SEND_ICON} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
