import React from 'react'
import './App.css'
import Todo from './components/todo/Todo'
import TodoAdvanced from './components/todo/TodoAdvanced'

function App() {
  return (
    <>
      <div className='container mx-auto px-20 py-10  flex justify-center'>
        <div className='w-full md:w-8/12'>
            <div className="bg-white shadow-md rounded px-6 py-4">
                <Todo/>
                <TodoAdvanced/>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default App
