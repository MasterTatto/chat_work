import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [value, setValue] = useState('')
    const [messageList, setMessageList] = useState([])

    useEffect(() => {
        if (messageList.length === 0) return
        if (messageList.at(-1).author === 'bot') return
        setTimeout(() => {
            const newMessage = {author: 'bot', message: 'i am BOOOT'}
            setMessageList([...messageList, newMessage])
        }, 1000)
    }, [messageList])

    const sendMessage = (value) => {
        const newMessage = {author: 'user', message: value}
        setMessageList([...messageList, newMessage])
    }

    const MessagesItems = () => messageList.map((el) =>
        <div key={el.id}
             className={`${'block_message'} ${el.author === 'user' ? 'block_message_user' : 'block_message_bot'}`}>
            <h4 className={'block_message_author'}>{el.author}</h4>
            <p className={'block_message_message'}>{el.message}</p>
        </div>
    )

    return (
        <div className="App">
            <div className={'owner_block_message'}>
                <div className={'wrapper_block_message'}>
                    <MessagesItems/>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    sendMessage(value)
                }} className={'form'}>
                    <textarea rows="5" cols="33" placeholder='Write message'
                              onChange={(e) => setValue(e.target.value)}/>
                    <button type='submit'>
                        Send message
                    </button>
                </form>

            </div>
        </div>
    );
}

export default App;
