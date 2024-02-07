import { useCallback, useState ,useEffect, useRef} from 'react'

function App() {

  const [length, setLength] = useState(7);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passwrodRef = useRef(null);


  //function Password Generater 
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = 'ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrstvwxyz';
    if(charAllowed) str +="!@#$^&*-_+=[1{}~'"
    if(numberAllowed) str +="0123456789"
    for(let i=1; i<= length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
      setPassword(pass)
    }
  },[length,charAllowed, numberAllowed, setPassword]);
 
  const copyPasswordClipbord = useCallback(()=>{
    passwrodRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenerator()},[length,charAllowed, numberAllowed,passwordGenerator])
  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Genrator</h1>
      <div className='w-full max-w-md mx-auto shadow-md
      rounded-lg px-5 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-2xl text-center text-white my-3'>Password Genrator</h1>
      <div className='flex shadow rounded-lg overflow-hidden md-4'>
        <input type='text'
        ref={passwrodRef}
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        />
        <button onClick={copyPasswordClipbord} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onChange={()=>console.log("print")}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'></div>
      <div className='flex items-center gap-x-1'>
        <input 
        type='range' min={6}
         max={100} value={length}
          className='cursor-pointer'
          onChange={(e)=>setLength(e.target.value)}
        />
        <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input 
        type='checkbox' min={6}
         defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }}
        />
        <label>Numbers</label>
        <input 
      
        type='checkbox'
         defaultChecked={numberAllowed}
          id='Characters'
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }}
        />
        <label>Characters</label>
      </div>
      </div>
    </>
  )
}

export default App
