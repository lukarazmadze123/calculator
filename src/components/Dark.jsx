import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Dark() {
  const[count,setcount] = useState('0')
  const deletel = () => {
    if(count.length === 1){
      setcount('0')
    }else{
      setcount(count.slice(0, count.length - 1))
    }
  }  
  const AC = () => {
    setcount(String(0 + 0))
  }

  const adnum = (num) => {
    if(count === '0'){
      setcount(String(num))
    } else{
      setcount(count + num)
    }
  }

  const Equals = () => {
    if (count.includes('+')) {
      const parts = count.split('+');
      const firstNum = Number(parts[0])
      const twiceNum = Number(parts[1])
      setcount(String(firstNum + twiceNum))
    } else if(count.includes('-')){
      const parts = count.split('-')
      const firstNum = Number(parts[0])
      const twiceNum = Number(parts[1])
      setcount(String(firstNum - twiceNum))
    } else if(count.includes('/')){
      const parts = count.split('/')
      const firstNum = Number(parts[0])
      const twiceNum = Number(parts[1])
      if(twiceNum != '0'){
        setcount(String(firstNum / twiceNum))
      }else{
        setcount('Cannot be divided by 0')
      }
    } else if(count.includes('*')){
      const parts = count.split('*')
      const firstNum = Number(parts[0])
      const twiceNum = Number(parts[1])
      setcount(String(firstNum * twiceNum))
    }else{
      setcount('indeterminate')
    }
  }

  useEffect(() => {
  const handleKeyDown = (event) => {
    const { key } = event
    if (/[0-9]/.test(key)) {
      adnum(key)
    }else if (key === '+' || key === '-' || key === '*' || key === '/') {
      adnum(key)
    }else if (key === 'Enter') {
      Equals()
    }else if (key === 'Backspace') {
      deletel()
    }else if (key === 'Escape') {
      AC()
    }
  }

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown)
  };
}, [count])

  return (
    <div className=' flex justify-center h-[100vh] items-center bg-black'>

      <div className='flex flex-col shadow-lg items-end p-[20px] rounded-[30px] bg-gradient-to-b from-[#121212] to-[#1a1a1a] text-white'>
        <Link to='/light' className='p-[7px] bg-white rounded-full'></Link>
        <p className='text-[50px]'>{count}</p>
        <div className='grid grid-cols-4 grid-rows-5 gap-[5px] '>
          <button className='hover:shadow-lg duration-900 ease-in-out  p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] text-[#919192] bg-[#3D3D3E]' onClick={AC}>AC</button>
          <button className='hover:shadow-lg duration-900 ease-in-out  p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] text-[#919192] bg-[#3D3D3E]' onClick={deletel}>⌫</button>
          <button className='hover:shadow-lg duration-900 ease-in-out  p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] text-white bg-[#005DB2]' onClick={() => adnum('*')}>×</button>
          <button className='hover:shadow-lg duration-900 ease-in-out  p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] text-white bg-[#005DB2]' onClick={() => adnum('/')}>÷</button>
          <button className='hover:shadow-lg duration-900 ease-in-out  p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] bg-[#2D2D2E] text-blue-500' onClick={() => adnum('1')}>1</button>
          <button className='hover:shadow-lg duration-900 ease-in-out  p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] bg-[#2D2D2E] text-blue-500' onClick={() => adnum('2')}>2</button>
          <button className='hover:shadow-lg duration-900 ease-in-out  p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] bg-[#2D2D2E] text-blue-500' onClick={() => adnum('3')}>3</button>
          <button className='hover:shadow-lg duration-900 ease-in-out  p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] text-white bg-[#005DB2]' onClick={() => adnum('+')}>+</button>
          <button className='hover:shadow-lg duration-900 ease-in-out  p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] bg-[#2D2D2E] text-blue-500' onClick={() => adnum('4')}>4</button>
          <button className='hover:shadow-lg duration-900 ease-in-out  p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] bg-[#2D2D2E] text-blue-500' onClick={() => adnum('5')}>5</button>
          <button className='hover:shadow-lg duration-900 ease-in-out  p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] bg-[#2D2D2E] text-blue-500' onClick={() => adnum('6')}>6</button>
          <button className='hover:shadow-lg duration-900 ease-in-out  p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] text-white bg-[#005DB2]' onClick={() => adnum('-')}>-</button>
          <button className='hover:shadow-lg duration-900 ease-in-out  p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] bg-[#2D2D2E] text-blue-500' onClick={() => adnum('7')}>7</button>
          <button className='hover:shadow-lg duration-900 ease-in-out  p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] bg-[#2D2D2E] text-blue-500' onClick={() => adnum('8')}>8</button>
          <button className='hover:shadow-lg duration-900 ease-in-out  p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] bg-[#2D2D2E] text-blue-500' onClick={() => adnum('9')}>9</button>
          <button className='hover:shadow-lg duration-900 ease-in-out  w-[70px] h-full flex flex-col justify-center text-center text-[20px] shadow-lg rounded-[20px] text-white bg-[#009BFF] row-span-2' onClick={Equals}>=</button>
          <button className='hover:shadow-lg duration-900 ease-in-out  p-[20px] col-span-3 grid-cols-3 flex flex-col justify-center text-center text-[20px] shadow-lg rounded-[20px] bg-[#2D2D2E] text-blue-500' onClick={() => adnum('0')}>0</button>
        </div>
      </div>
    </div>
  )
}