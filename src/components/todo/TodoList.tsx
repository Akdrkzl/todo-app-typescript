import React from 'react'
type ListProps<T> = {
    // list:string[] | {
    //     text:string
    //     isCompleted?:boolean
    // }[]
    // setList: React.Dispatch<React.SetStateAction<{ text: string; isCompleted?: boolean }[]>>
    list:T[]
    setList:React.Dispatch<React.SetStateAction<T[]>>
}
//*generics ile tek bir list ile iki farklı inputtan verileri yazdırma işlemini yaptık.
function TodoList<T extends string | { text: string; isCompleted?: boolean }>(props:ListProps<T>) {

    const handleToggleComplete = (e:number):void =>{
        let newList= [...props.list]
        if (typeof newList[e] === 'object' && 'isCompleted' in newList[e]) {
            newList[e].isCompleted = !newList[e].isCompleted;
        }else {
            console.warn('isCompleted Yok');
        }
        props.setList(newList);
    }

    const deleteItem = (e:number):void =>{
        let newList= [...props.list]
        newList.splice(e,1)
        props.setList(newList);
    }

  return (
    <>
        <div className='list-wrapper'>
            <ul className='flex flex-col-reverse'>
                {props.list.map((e,i)=>{
                    if(typeof e == 'string'){
                        return <li key={i} className='p-2 bg-white flex items-center justify-between border-b border-gray-200'>
                            <div>
                                <span className='ml-2'>{e}</span>
                            </div>
                            <i className="remove cursor-pointer text-gray-500 hover:text-red-500" onClick={()=>deleteItem(i)}>✕</i>
                        </li>
                    }else{
                        return <li key={i} className={`p-2 bg-white flex items-center justify-between border-b border-gray-200 `}> 
                            <div className='flex items-center'>
                                <input type="checkbox" checked={e.isCompleted} onChange={()=>handleToggleComplete(i)}/>
                                <span className={`ml-2 ${e.isCompleted ?'bg-gray-100 line-through' : ''}`}>{e.text}</span>
                            </div> 
                            <i className="remove cursor-pointer text-gray-500 hover:text-red-500" onClick={()=>deleteItem(i)}>✕</i>
                        </li>
                    }
                })}
            </ul>

        </div>
    </>
  )
}

export default TodoList