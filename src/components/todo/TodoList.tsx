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

function TodoList<T extends string | { text: string; isCompleted?: boolean }>(props:ListProps<T>) {

    const handleToggleComplete = (e:number):void =>{
        console.log("propslist "+typeof(props.list))
        let newList= [...props.list]
        console.log("newlist " + typeof(newList))
        console.log("setlist " +typeof(props.setList))
        if (typeof newList[e] === 'object' && 'isCompleted' in newList[e]) {
            newList[e].isCompleted = !newList[e].isCompleted;
            console.log(newList[e].isCompleted)
        }else {
            console.warn('The item at e', e, 'is not an object with isCompleted property');
        }
        props.setList(newList);
    }

    const deleteItem = (e:number):void =>{
        console.log(e)
        let newList= [...props.list]
        newList.splice(e,1)
        props.setList(newList);
    }
    
  return (
    <>
        <div className='list-wrapper'>
            <h1 className=''>Yapılacaklar</h1>
            <ul className='flex flex-col-reverse'>
                {props.list.map((e,i)=>{
                    if(typeof e == 'string'){
                        return <p key={i}>{e}</p>
                    }else{
                        return <li key={i} className={`p-2 bg-white flex items-center justify-between border-b border-gray-200 `}> 
                            <div className='flex items-center'>
                                <input type="checkbox" onChange={()=>handleToggleComplete(i)}/>
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