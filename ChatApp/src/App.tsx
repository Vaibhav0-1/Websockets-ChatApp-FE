import { useEffect, useRef, useState } from 'react'
import { WebSocket } from 'vite';
import './App.css'

function App() {

  const [messages, setMessages] = useState(["Hi There", "Hello"])
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket("https://localhost:3000");
    ws.onmessage = (event) => {
      setMessages(m => [...m, event.data.toString()])
    }
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "join",
        payload: {
          roomId: "red"
        }
      }))
    }
  }, []);
  return (
    <div className='h-screen bg-black'>
      <br /><br /><br />
      <div className='h-[70vh]'>
        {messages.map(message => <div className='m-8'><span className='bg-purple-100 text-black rounded p-4 m-8'> {message} </span></div>)}</div>
      <div className='flex bg-purple-100 p-1'>
        <input
          placeholder='Message'
          type="text"
          className="flex-1 p-"
        />
        <button onClick={() => {
          const message = (document.getElementById("message") as HTMLInputElement)?.value;
          wsRef.current?.send(JSON.stringify({
            type: "chat",
            payload: {
              message: message
            }
          }))

        }} className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700">
          Send Message
        </button>
      </div>
    </div>
  )
}
export default App
