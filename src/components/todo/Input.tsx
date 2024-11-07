import React, { FC, RefObject }  from 'react'
import {InputProps} from './inputprops'


const Input : FC<InputProps> = ({value,handleChange, handleKeyDown, handleClick, inputRef}) => {
    return (
        <>
            <div className='flex mb-4'>
                <input required type="text" value={typeof value == 'string' ? value : '' } onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef} placeholder='Yapacaklarını Unutma!' id='default-input' className=' flex-grow p-2 text-sm bg-gray-50 border border-gray-300  focus:border-gray-500 focus:outline-none'/>
                <button type='button' className='px-4 py-2 bg-gray-500 text-white' onClick={handleClick}>Kaydet</button>
            </div>
        </>
    )
}

export default Input

