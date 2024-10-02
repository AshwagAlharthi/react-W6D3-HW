import { useState } from 'react'
import React from 'react'
import '../App.css'
import chatBg from '../assets/Chatbot.png'
import { useNavigate } from 'react-router-dom';

function Login() {

    localStorage.removeItem("firstUser");
    localStorage.removeItem("secondUser");

    const [user1, setUser1] = useState("");
    const [user2, setUser2] = useState("");
    const [text, setText] = useState("");
    const navigate = useNavigate();

    const handleUser1 = (e) => {
        setUser1(e.target.value)
    }

    const handleUser2 = (e) => {
        setUser2(e.target.value)
    }

    const handleSubmit = () => {
        setText("");
        if (user1.trim() === "" || user2.trim() === "") {
            setText("* Please Enter Users Names");
            return;
        } else {
            navigate('/chat');
            localStorage.setItem("firstUser", user1);
            localStorage.setItem("secondUser", user2);
        }
    }
    return (
        <div className='flex justify-center items-center w-full h-screen bg-[#e1d9cf]'>
            <div className='relative flex flex-col justify-evenly items-end w-[50%] h-[90%] max-sm:gap-2 max-sm:w-full max-sm:h-[60%]'>
                <div className='w-full h-[10%]'>
                    <h1 className='font-bold text-5xl text-[#263238] max-sm:text-4xl max-sm:text-center'>Chatting App!</h1>
                </div>
                <div className='flex justify-end items-center w-full h-[80%] max-sm:w-full max-sm:h-auto max-md:w-full'>
                    <div className='absolute top-40 left-20 flex flex-col justify-center items-center gap-5 max-sm:top-44 max-sm:-left-3 max-md:-left-0'>
                        <div className="chat chat-end">
                            <div className="chat-bubble bg-[#C19A6B] w-[22vw] h-[10vh] max-sm:w-[55vw] max-sm:h-[6vh]">
                                <input type="text" value={user1} onChange={handleUser1} className='bg-transparent w-full h-full pl-2 text-black placeholder:text-gray-600 max-sm:text-sm' placeholder='Enter First User Name' />
                            </div>
                        </div>
                        <div className="chat chat-end">
                            <div className="chat-bubble bg-[#C19A6B] w-[22vw] h-[10vh] max-sm:w-[55vw] max-sm:h-[6vh]">
                                <input type="text" value={user2} onChange={handleUser2} className='bg-transparent w-full h-full pl-2 text-black placeholder:text-gray-600 max-sm:text-sm' placeholder='Enter Second User Name' />
                            </div>
                        </div>
                        <button className='btn bg-[#263238] text-white max-sm:mr-8' onClick={handleSubmit}>
                            Get Started
                        </button>
                        {text &&
                            <p className='text-[#86643d] text-[0.8rem] max-sm:text-[0.7rem] text-center font-bold pr-3 max-sm:w-[35vw] max-sm:mr-8'>{text}</p>
                        }
                    </div>
                    <div className='flex justify-center items-center w-[60%] h-full pr-4 max-sm:pr-1'>
                        <div className="mockup-phone border-primary">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="artboard-demo phone-1 w-[18vw] h-[65vh] max-sm:w-[48vw] max-sm:h-[38vh]  max-md:w-[25vw]">
                                    <div className='w-full h-full bg-white'>
                                        <img className='w-full h-full ' src={chatBg} />
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

export default Login