import { useState, useCallback,useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numberAllowed) str += "0123456789"
      if (charAllowed) str += "~!@#$%^&*(){}[]+=_-/?,.;:"
       
    for (let i = 0; i < length; i++){
     let char = Math.floor(Math.random() * str.length + 1);
  pass += str.charAt(char);
}


      setPassword(pass)
    },
    [length,numberAllowed,charAllowed,setPassword],
  )

  const copyPasswordToClipBoard = useCallback(
    () => {
      passwordRef.current?.select();
      // passwordRef.current?.setSelectionRange(0, 100);
      window.navigator.clipboard.writeText(password)
    },
    [password],
 
  )
  useEffect(() => {
    passwordGenerator()
  
   
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  
  return (
    <>
     
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>

        <h1 className ='text-4xl text-center text-white mb-10 pt-6 ' >Password Generator</h1> 

        <div className='flex shadow rounded-lg overflow-hidden mb-9'>
          <input
           type="text"
           value = {password}
           className='outline-none w-full py-1 px-3 
           '
           placeholder='Password'
           readOnly
           ref={passwordRef}
            />
           <button
           onClick={copyPasswordToClipBoard}
           className='outline-none bg-blue-700 text-white px-3 py-1 hover:bg-blue-600'>copy</button>
        </div>
        <div className='flex-wrap text-sm gap-x-7'>
        <div className='flex items-center gap-x-3 mb-4'>
          <input 
          type="range"
          min={4}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) =>{setLength(e.target.value)}}

          />
          <label htmlFor="" className=''>Length: {length}</label>
        </div>


        <div className='flex items-center gap-x-1 mb-4'>
          <input 
          type="checkbox"
          className=''
           defaultChecked = {numberAllowed}
           id="numberInput"
           onChange = {() =>{
            setNumberAllowed((prev) => !prev);
           }} />
           <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1 mb-4'>
          <input 
          type="checkbox"
          className=''
           defaultChecked = {numberAllowed}
           id="charInput"
           onChange = {() =>{
            setCharAllowed((prev) => !prev);
           }} />
           <label htmlFor="numberInput">Characters</label>
        </div>
        </div>
        
        <h3 className='text-white text-center justify-center'>Made In India</h3>
        <h4 className='text-white font-text-center justify-center pb-4'>(BIDSUK)</h4>
       
      </div>

    </>
  )
}

export default App
