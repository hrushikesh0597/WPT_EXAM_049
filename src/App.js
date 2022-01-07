// import axios from "axios";
import { useState, useEffect } from "react";
export default function App() {
  return (
    <div>
      <MyFuction></MyFuction>
    </div>
  );
}

function MyFuction() {
  const [list, setList] = useState("");
  const [message, setMessage] = useState("");

  const updateData = (e) => {
    const massage = e.target.value;
    const newList = [massage, ...list];
    setList(newList);
    setMessage("");
  };
  return (
    <div>
      <div className="bg-dark text-light p-3">
        <h1>MyChatApp</h1>
        <span>by Hrushikesh Rahate (049KH)</span>
      </div>
      <div>
        <input
          className="form-control form-control-lg mb-1"
          type="text"
          value={message}
          placeholder="lets chat here ..."
          onChange={updateData}
        />

        <input
          className="btn btn-secondary w-100"
          type="button"
          value="send "
        />
      </div>
    </div>
  );
}
