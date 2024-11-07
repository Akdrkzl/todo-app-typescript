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

    useEffect(()=>{
        const storedList = localStorage.getItem("todoList")
        if(storedList){
            setList(JSON.parse(storedList))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("todoList",JSON.stringify(list))
    },[list])

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
        const inputValue = inputRef.current?.value.trim();
        if(inputValue){
            setList(prev => [...prev,value]);
            setValue({ text: "", isCompleted: false });
            if(inputRef.current){
              inputRef.current.value = ''
            }
        }

    };

    // useEffect(()=>{
    //     // console.log(value)
    //     console.log(typeof(list))
    //     console.log(list)
    // },[list])

  return (
    <>
        <div className='mb-4'>
            <h1 className='text-lg font-semibold'>Todo Advanced</h1>
        </div>
        <Input value={value.text || ''} handleChange={handleChange} handleClick={handleClick} handleKeyDown={handleKeyDown} inputRef={inputRef}/>
        <TodoList list={list} setList={setList}/>
    </>
  )
}

export default TodoAdvanced