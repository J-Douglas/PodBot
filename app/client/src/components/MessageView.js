import React, { Component } from 'react';
import FlipMove from 'react-flip-move'
import $ from 'jquery'

import Message from './Message'

class MessageView extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            messages: [],
        }
    }

    componentDidMount() {
        this.getMessageHistory();
    }

    getMessageHistory = () => {
        // $.ajax({
        //     url: 'localhost:5000/query',
        //     type: "GET",
        //     success: (result) => {
        //         this.setState({
        //             messages: result.messages
        //         })
        //     },
        //     error: (error) => {
        //         alert('Unable to load messaes')
        //         return;
        //     }
        // })
        console.log("yeet")
        this.setState({
            messages: [
                {
                    id: 1,
                    message: "hi"
                },
                {
                    id: 2,
                    message: "yo"
                }
            ]
        })
    }
    
    render() {
        console.log(this.messages)
        return(
            <FlipMove>
            {
                this.messages.map(({id, message}) => (
                    <Message key = {id} message={message}/>
                ))
            }
            </FlipMove>
        );
    }
}

export default MessageView