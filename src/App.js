import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "aditya", text: "hello everyone" },
    { username: "lucien", text: "hi guys" },
  ]);
  const [username, setUsername] = useState("");
  // useState = variable in react
  //   useEffect = run code on a condition when app component loads
  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []); //condition

  const sendMessage = (event) => {
    //   all the logic to send a message goes
    event.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Hello Lucien</h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant="contained"
            color="secondary"
            type="submit"
            onClick={sendMessage}
          >
            Send message
          </Button>
        </FormControl>
      </form>

      {/* messages itself */}
      {messages.map((message) => (
        <Message username={message.username} text={message.text} />
      ))}
    </div>
  );
}

export default App;
