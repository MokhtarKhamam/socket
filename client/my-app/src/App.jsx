import { useState } from 'react';
import './App.css';
import io from "socket.io-client"


const socket = io.connect("http://localhost:3001")

function App() {
  const [userName, setUsername] = useState("")
  const [room, setRoom] = useState("")

  const joinRoom = () => {
    if(userName !== "" && room !== ""){
      socket.emit("join_room", room)
    }
  }

  return (
    <div>
      <h3>Join Room</h3>
      <input type="text" placeholder='join...' value={userName} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" placeholder='ROOM ID' value={room} onChange={(e) => setRoom(e.target.value)} />
      <button onClick={joinRoom}>Join A Room</button>
    </div>
  );
}

export default App;
