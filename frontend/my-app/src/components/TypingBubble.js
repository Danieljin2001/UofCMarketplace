import { useEffect, useState } from "react";

function TypingBubble({ userEmail }) {
  const [username, setUsername] = useState("Loading...");

  useEffect(() => {
    let name = userEmail.substring(0, userEmail.indexOf("@"));
    setUsername(name);
  }, [userEmail]);

  return (
    <div
      style={{ backgroundColor: "lightblue " }}
      className="typing mr-auto ml-5 mb-1"
    >
      <p
        style={{ backgroundColor: "lightblue ", fontSize: "1rem" }}
        className="mt-1"
      >
        <strong style={{ backgroundColor: "lightblue " }}>{username} </strong>{" "}
        is typing...
      </p>
    </div>
  );
}
export default TypingBubble;
