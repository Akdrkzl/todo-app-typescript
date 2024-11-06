import React, { useRef, useState } from 'react'
import Input from './Input'
import TodoList from './TodoList'

//*basit todo işlemleri 
function Todo() {
  const [value, setValue] = useState<string>('')
  const [list,setList] = useState<string[]>([])

  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(inputRef.current?.value || '') //*yada if ile kontrol et
  }

  //*alternatif olarak enter ile yazdırma.ChangeEvent ve KeyboradEvent farklı event türlerinde olduğunda dolayı iki farklı fonksiyon yazdık.
  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) =>{
    if(e.key =='Enter'){
      handleList();
    }
  }

  const handleClick = () => {
    handleList();
  };

  const handleList = ()=>{
    setList(prev => [...prev,value])
    if(inputRef.current){
      inputRef.current.value = ''
    }
    setValue('')
  };


  return (
    <>
      <div>
        <h1 className='todo__header'>TODO</h1>
        <Input handleChange={handleChange} handleClick={handleClick} handleKeyDown={handleKeyDown} inputRef={inputRef} value={value} />
        <TodoList list={list}/>
      </div>   
    </>
  )
}

export default Todo