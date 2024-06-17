import "./App.css";
import Login from "./compents/Login";
import Profile from "./compents/Profile";
import UserContextProvider from "../src/context/UserContextProvider";
function App() {
  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
