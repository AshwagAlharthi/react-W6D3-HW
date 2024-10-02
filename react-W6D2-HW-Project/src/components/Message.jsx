import React from 'react'

function Message(props) {
    return (
        <div className='bg-blue-600 text-black w-[30%] h-[5vh]'>
            {props.message}
        </div>
    )
}

export default Message