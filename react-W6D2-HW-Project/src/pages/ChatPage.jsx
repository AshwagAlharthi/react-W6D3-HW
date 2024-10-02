import React from 'react'
import { useState } from 'react'
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import PhoneScreen from '../components/PhoneScreen';

function ChatPage() {
    const usersNames = [
        { id: 1, name: localStorage.getItem("firstUser") },
        { id: 2, name: localStorage.getItem("secondUser") }
    ];

    const [writeMessage1, setWriteMessage1] = useState("");
    const [writeMessage2, setWriteMessage2] = useState("");
    const [messages, setMessages] = useState([]);

    const handleWritingMessage1 = (e) => {
        setWriteMessage1(e.target.value)
    }

    const handleSendingMessage = (user) => {
        const currentMsg = user.id === 1 ? writeMessage1 : writeMessage2;

        if (currentMsg.trim() !== "") {
            setMessages((preMsgs) => [...preMsgs, {
                "msg": currentMsg,
                "user": user,
            }]);

            setTimeout(() => {
                const messagesContainer1 = document.getElementById("messagesContainer1");
                const messagesContainer2 = document.getElementById("messagesContainer2");
                messagesContainer1.scrollTop = messagesContainer1.scrollHeight;
                messagesContainer2.scrollTop = messagesContainer2.scrollHeight;
            }, 0);

            if (user.id === 1) {
                setWriteMessage1("");
            } else {
                setWriteMessage2("");
            }
        }
    }

    const handleWritingMessage2 = (e) => {
        setWriteMessage2(e.target.value)
    }

    return (
        <div className='flex justify-evenly items-center w-full h-screen bg-[#e1d9cf] max-sm:flex-col max-sm:h-auto'>
            <PhoneScreen
                user={usersNames[0]}
                writeMessage={writeMessage1}
                handleWritingMessage={handleWritingMessage1}
                messages={messages}
                handleSendingMessage={() => handleSendingMessage(usersNames[0])}
            />
            <PhoneScreen
                user={usersNames[1]}
                writeMessage={writeMessage2}
                handleWritingMessage={handleWritingMessage2}
                messages={messages}
                handleSendingMessage={() => handleSendingMessage(usersNames[1])}
            />
        </div>
    )
}

export default ChatPage