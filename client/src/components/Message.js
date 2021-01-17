import { Card, CardContent, Divider, Typography } from '@material-ui/core'
import React, { Component, forwardRef } from 'react';
import '../stylesheets/Message.css'


class Message extends Component {
    render() {
        const { id, message, isUser } = this.props;
        return (
            <div className={`message ${isUser && 'message__user'}`} >
                <Card className={isUser ? 'message__userCard' : 'message__guestCard'} style={{borderRadius: 50}}>
                    <CardContent>
                        <Typography
                            color='white'
                            variant='h5'
                            component='h2'
                        >
                            {message.replace(` ' ` , `'`).replace(` .`, `.`).replace(` ?`, `?`).replace(` ,`, `,`).replace(' i ', ' I ').replace(/.+?[\.\?\!](\s|$)/g, function (txt) {
                                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                            })}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Message