import React from "react";
import { confirmAlert } from "react-confirm-alert";

function DeletePost() {
  const handleClick = () => {
    confirmAlert({
      title: "UofC Markplace",
      message: "Are you sure you want to delete this Post?",
      buttons: [
        { label: "Yes", onClick: alert("clicked yes") },
        {
          label: "No",
          onClick: () => {
            return;
          },
        },
      ],
    });
  };

  return (
    <div className=" text-center">
      <button onClick={handleClick} className="btn btn-danger">
        DELETE
      </button>
    </div>
  );
}

export default DeletePost;
