import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Light() {
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
    }else if(key === '.' || key === ','){
      adnum('.')
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
    <div className=' flex justify-center h-[100vh] items-center bg-gray-100'>

      <div className='flex flex-col max-sm:items-center max-sm:justify-end shadow-lg items-end p-[20px] pt-[70px] max-sm:h-[100vh] max-sm:h-[100vh] max-sm:rounded-[0px] rounded-[30px] bg-white gap-[10px] text-white'>
        
        <Link to='/' className='p-[7px] max-sm:left-[160px] max-sm:bottom-[30px] max-sm:p-[11px] bg-gray-700 rounded-full relative bottom-[20px]'></Link>
        <div className='w-[95%] flex justify-end '>
          <p className='text-[50px] text-[#414141]'>{count}</p>
        </div>       
        <div className='grid grid-cols-4 grid-rows-5 gap-[5px] max-sm:w-full h-auto '>
          <button className='hover:shadow-lg active:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-400 ease-in-out max-sm:w-[80px] max-sm:h-[90px] p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] text-[#919192] bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]' onClick={AC}>AC</button>
          <button className='hover:shadow-lg active:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-400 ease-in-out max-sm:w-[80px] p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] text-[#919192] bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]' onClick={deletel}>⌫</button>
          <button className='hover:shadow-lg active:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-400 ease-in-out max-sm:w-[80px] p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] text-[#00A1FF] bg-[#DDF4FF] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]' onClick={() => adnum('*')}>×</button>
          <button className='hover:shadow-lg active:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-400 ease-in-out max-sm:w-[80px] p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] text-[#00A1FF] bg-[#DDF4FF] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]' onClick={() => adnum('/')}>÷</button>
          <button className='hover:shadow-lg active:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-400 ease-in-out max-sm:w-[80px] p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] bg-white text-blue-500 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]' onClick={() => adnum('1')}>1</button>
          <button className='hover:shadow-lg active:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-400 ease-in-out max-sm:w-[80px] p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] bg-white text-blue-500 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]' onClick={() => adnum('2')}>2</button>
          <button className='hover:shadow-lg active:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-400 ease-in-out max-sm:w-[80px] p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] bg-white text-blue-500 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]' onClick={() => adnum('3')}>3</button>
          <button className='hover:shadow-lg active:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-400 ease-in-out max-sm:w-[80px] p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] text-[#00A1FF] bg-[#DDF4FF] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]' onClick={() => adnum('+')}>+</button>
          <button className='hover:shadow-lg active:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-400 ease-in-out max-sm:w-[80px] p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] bg-white text-blue-500 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]' onClick={() => adnum('4')}>4</button>
          <button className='hover:shadow-lg active:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-400 ease-in-out max-sm:w-[90px] p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] bg-white text-blue-500 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]' onClick={() => adnum('5')}>5</button>
          <button className='hover:shadow-lg active:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-400 ease-in-out max-sm:w-[80px] p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] bg-white text-blue-500 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]' onClick={() => adnum('6')}>6</button>
          <button className='hover:shadow-lg active:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-400 ease-in-out max-sm:w-[80px] p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] text-[#00A1FF] bg-[#DDF4FF] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]' onClick={() => adnum('-')}>-</button>
          <button className='hover:shadow-lg active:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-400 ease-in-out max-sm:w-[80px] p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] bg-white text-blue-500 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]' onClick={() => adnum('7')}>7</button>
          <button className='hover:shadow-lg active:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-400 ease-in-out max-sm:w-[80px] p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] bg-white text-blue-500 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]' onClick={() => adnum('8')}>8</button>
          <button className='hover:shadow-lg active:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-400 ease-in-out max-sm:w-[80px] p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] bg-white text-blue-500 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]' onClick={() => adnum('9')}>9</button>
          <button className='hover:shadow-lg active:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-400 ease-in-out max-sm:w-[80px] w-[70px] h-full flex flex-col justify-center text-center text-[20px] shadow-lg rounded-[20px] text-white bg-[#00A1FF] row-span-2' onClick={Equals}>=</button>
          <button className='hover:shadow-lg active:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-400 ease-in-out p-[20px] col-span-2 grid-cols-3 flex flex-col justify-center text-center text-[20px] shadow-lg rounded-[20px] bg-white text-blue-500 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]' onClick={() => adnum('0')}>0</button>
          <button className='hover:shadow-lg active:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-400 ease-in-out max-sm:w-[80px] p-[20px] w-[70px] flex flex-col justify-center text-center text-[20px] rounded-[20px] bg-white text-blue-500 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]' onClick={() => adnum('.')}>.</button>
        </div>
      </div>
    </div>
  )
}