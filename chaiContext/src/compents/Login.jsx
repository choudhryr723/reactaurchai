import UserContext from "../context/UserContext";
import { useState, useContext } from "react";
export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const handleSummit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <>
      <h2>login</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter email id"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={handleSummit}>Submit</button>
    </>
  );
}
