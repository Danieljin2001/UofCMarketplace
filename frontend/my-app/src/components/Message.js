import React, { useEffect, useState } from "react";

const Message = ({ props }) => {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    props.on("chat", function (data) {
      setMsg(data.msg);
    });
  }, []);

  return (
    <>
      {/* other person message */}
      <div
        id="message"
        className="my-2 py-2 px-2"
        style={{
          borderRadius: "15px 15px 15px 0px",
          color: "white",
          backgroundColor: "grey",
          width: "fit-content",
          maxWidth: "45%",
        }}
      >
        {msg[0]}
      </div>

      {/* own message */}
      <div
        id="ownerMessage"
        className="my-2 py-2 px-2"
        style={{
          float: "right",
          color: "white",
          backgroundColor: "#147efb",
          width: "fit-content",
          borderRadius: "15px 15px 0px 15px",
          maxWidth: "45%",
        }}
      >
        test
      </div>
    </>
  );
};

export default Message;
