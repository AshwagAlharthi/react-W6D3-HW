import { useState } from 'react'
import React from 'react'
import Header from './Header';

function PhoneScreen({ user, writeMessage, handleWritingMessage, messages, handleSendingMessage }) {

    return (
        <div className='flex flex-col justify-center items-center gap-4 max-sm:mt-10'>
            <h1 className='text-3xl font-bold text-[#86643d]'>{user.name}</h1>
            <div className="mockup-phone">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard-demo phone-1  w-[22vw] h-[80vh] max-sm:w-[80vw] max-sm:h-[60vh]">
                        <div className='relative w-full h-full bg-[url("https://i.pinimg.com/564x/75/df/f8/75dff8bb79b3b31636e710266b177a58.jpg")] bg-cover bg-center'>
                            <div className='w-[100%] h-[89%] flex flex-col justify-between items-end'>
                                <Header name={user.name} color="#366d37" />
                                <div id={`messagesContainer${user.id}`} className='w-[100%] h-[80%] overflow-y-scroll pb-5'>
                                    {messages.map((message, index) => (
                                        message.user.id == user.id ? (
                                            <div key={index} className="chat chat-start">
                                                <div className="chat-header">
                                                    {message.user.name}
                                                </div>
                                                <div className={`chat-bubble max-w-[80%] ${message.user.id == user.id ? "bg-green-600 text-black" : "bg-slate-700 text-white"}`}
                                                    style={{ wordWrap: 'break-word' }}
                                                >
                                                    {message.msg}
                                                </div>
                                            </div>)
                                            :
                                            (<div key={index} className="chat chat-end">
                                                <div className="chat-header">
                                                    {message.user.name}
                                                </div>
                                                <div className={`chat-bubble max-w-[80%] ${message.user.id == user.id ? "bg-green-600 text-black" : "bg-slate-700 text-white"}`}
                                                    style={{ wordWrap: 'break-word' }}
                                                >
                                                    {message.msg}
                                                </div>
                                            </div>)
                                    ))}
                                </div>
                                <div className='absolute bottom-0 w-[100%] h-[15%] bg-gray-800 flex justify-evenly pt-1 pb-2 items-center'>
                                    <textarea
                                        type="text"
                                        value={writeMessage}
                                        onChange={handleWritingMessage}
                                        placeholder='write a message'
                                        className='w-[77%] h-[75%] bg-gray-200 placeholder-slate-700 pl-3 rounded-xl text-black pt-2.5 resize-none'
                                    />
                                    <div className='flex justify-center items-center w-[15%] h-full'>
                                        <button
                                            onClick={handleSendingMessage}
                                            className='btn btn-circle border-none rounded-full bg-green-600 text-black hover:bg-green-800'>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="24px"
                                                viewBox="0 -960 960 960"
                                                width="24px"
                                                fill="#e8eaed">
                                                <path
                                                    d="M516-120 402-402 120-516v-56l720-268-268 720h-56Zm26-148 162-436-436 162 196 78 78 196Zm-78-196Z" />
                                            </svg>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhoneScreen