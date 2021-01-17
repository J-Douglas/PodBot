import React, { useEffect, useState } from 'react'
import FlipMove from 'react-flip-move'
import $ from 'jquery'
import './stylesheets/App.css';
import SendIcon from '@material-ui/icons/Send'
import IconButton from '@material-ui/core/IconButton'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'

import Message from './components/Message'

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages(
      [
        {
          id: 0,
          message: "Message me to begin our conversation",
          isUser: false
        }
      ]
    )
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()

    setMessages((current_messages) => [...current_messages, 
      {
        id: messages.length,
        message: input,
        isUser: true
      }
    ])

    $.ajax({
      url: 'http://localhost:8080/interact',
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: input,
      crossDomain: true,
      success: (result) => {
        console.log("AHHHHHHHHHH")
        setMessages((current_messages) => [...current_messages, 
          {
            id: messages.length,
            message: result.text,
            isUser: false
          }
        ])
      },
      error: (xhr, status, error) => {
        alert("Unable to load response at this time " + status)
      }
    })
    setInput('')
  }

   

  return (
    <div className="App">
      <form className='app__form' >
      <FormControl className='app__formControl' >
        <Input className='app__input' placeholder='Enter a message...' value={input} onChange={(e) => setInput(e.target.value)} />
        <IconButton className='app__iconButton' variant='text' color='primary' disabled={!input} onClick={sendMessage} type="submit" >
          <SendIcon />
        </IconButton>
      </FormControl>
    </form>

    <FlipMove>
        {
          messages.map(({ id, message, isUser }) => (
            <Message key={id} message={message} isUser = {isUser}/>
          ))
        }
      </FlipMove>
    </div>
    
  )
}

export default App;
