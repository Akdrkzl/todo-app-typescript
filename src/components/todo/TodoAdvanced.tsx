import React, { useEffect, useRef, useState } from 'react'
import Input from './Input'
import TodoList from './TodoList';

interface ValueType {
    text: string;
    isCompleted?: boolean;
}

//* gelişmiş todo işlemleri
function TodoAdvanced() {
    const [value, setValue] = useState<ValueType>({ text: "", isCompleted: false })
    const [list,setList] = useState<ValueType[]>([])
    
    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue({
            text:inputRef.current?.value || '',
            isCompleted: false,
        })
    };

    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) =>{
        if(e.key =='Enter'){
          handleList();
        }
    };
    
    const handleClick = () => {
        handleList();
    };

    const handleList = ()=>{
        setList(prev => [...prev,value]);
        if(inputRef.current){
          inputRef.current.value = ''
        }
        setValue({ text: "", isCompleted: false });
    };

    useEffect(()=>{
        // console.log(value)
        console.log(typeof(list))
    },[list])

  return (
    <div className='container mx-auto px-20 py-10  flex justify-center'>
        <div className='w-full md:w-8/12'>
            <div className="bg-white shadow-md rounded px-6 py-4">
                <div className='mb-4'>
                    <h1 className='text-lg font-semibold'>Todo Advanced</h1>
                </div>
                <Input value={value.text || ''} handleChange={handleChange} handleClick={handleClick} handleKeyDown={handleKeyDown} inputRef={inputRef}/>
                <TodoList list={list} setList={setList}/>
            </div>
        </div>
    </div>
  )
}

export default TodoAdvanced