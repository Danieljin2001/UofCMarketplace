import React, { useEffect, useState } from "react";
import { getStudentFriend } from "../api";
import Loading from "./Loading";
import SideChat from "./SideChat";
import { CgProfile } from "react-icons/cg";
import TypingBubble from "./TypingBubble";

const SideBar = ({ data, currentUser, online, typing, currentChat }) => {
  const [friendData, setFriendData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const otherUser = data.members.find((id) => id !== currentUser._id);
    console.log("other user= ", otherUser);
    const getFriendData = async (data) => {
      const friend = await getStudentFriend(data);
      setFriendData(friend);
    };

    getFriendData({ id: otherUser });
  }, []);

  useEffect(() => {
    if (friendData !== null) {
      setLoading(false);
    }
  }, [friendData]);

  return (
    <div className="d-flex flex-row justify-content-space-between text-center">
      {loading ? (
        <Loading />
      ) : (
        <div className="my-2 mx-2">
          {online === true ? (
           <svg height="100" width="20">
           <circle
             cx="30"
             cy="50"
             r="0.5rem"
             stroke="black"
             stroke-width="3"
             fill="gray"
           />
              Sorry, your browser does not support inline SVG.
            </svg>
          ) : (
            <svg height="100" width="20">
              <circle
                cx="30"
                cy="50"
                r="0.5rem"
                stroke="black"
                stroke-width="3"
                fill="gray"
              />
              Sorry, your browser does not support inline SVG.
            </svg>
          )}
          <span style={{ color: online ? "#51e200" : ""}}>
            {online ? "Online" : "Offline"}
          </span>
          <CgProfile /> <span style={{fontSize:"14px"}}>{friendData.email}</span>
          <span>
            {typing && currentChat._id === data._id && (
              <TypingBubble userEmail={friendData.email} />
            )}
          </span>
        </div>
      )}
    </div>
  );
};

export default SideBar;
