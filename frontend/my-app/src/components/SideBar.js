import React, { useEffect, useState } from "react";
import { getStudentFriend } from "../api";
import Loading from "./Loading";
import SideChat from "./SideChat";
import { CgProfile } from "react-icons/cg";

const SideBar = ({ data, currentUser, online }) => {
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
    <div
      className="container d-flex flex-row justify-content-space-between text-center"
      style={{
        borderRight: "1px solid black",
        flex: "1",
        fontSize: "1rem",
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        <div className="">
          {online && (
            <svg height="100" width="100">
              <circle
                cx="50"
                cy="50"
                r="0.5rem"
                stroke="black"
                stroke-width="3"
                fill="green"
              />
              Sorry, your browser does not support inline SVG.
            </svg>
          )}
          <CgProfile /> <span>{friendData.email}</span>
        </div>
      )}
    </div>
  );
};

export default SideBar;
