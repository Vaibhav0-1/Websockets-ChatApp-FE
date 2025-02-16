import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [messages, setMessages] = useState(["Hi There", "Hello"])

  useEffect(() => {
    const ws = new WebSocket("https://localhost:3000");
    ws.onmessage = (event) => {
      setMessages(m =>[...m, event.data])
    }
  }, []);
  return (
    <div className='h-screen bg-black'>
      <br/><br/><br/>
      <div className='h-[70vh]'>
        {messages.map(message => <div className='m-8'><span className='bg-purple-100 text-black rounded p-4 m-8'> {message} </span></div>)}</div>
      <div className='flex bg-purple-100 p-1'>
        <input 
          placeholder='Message' 
          type="text" 
          className="flex-1 p-"
        />
        <button className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700">
          Send Message
        </button>
      </div>
    </div>
  )
}
export default App
