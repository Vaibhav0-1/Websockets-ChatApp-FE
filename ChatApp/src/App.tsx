import './App.css'

function App() {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[95vh]'></div>
      <div className='flex w-full items-center gap-2  bg-white p-4'>
        <input 
          placeholder='Message' 
          type="text" 
          className="w-full flex bg-gray-700 text-white rounded-lg p-4 focus:outline-none"
        />
        <button className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700">
          Send Message
        </button>
      </div>
    </div>
  )
}
export default App
