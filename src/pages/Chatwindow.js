import React from 'react';
import Tooltip from '../Tooltip';

const chatMessages = [{
    user: 'MattXisXcool',
    text: 'Hey Jordan!',
    date: '03/26/2020'
  },{
    user: 'Jordan96',
    text: 'Hey Matt!',
    date: '03/25/2020'
  },{
    user: 'NewGuy128',
    text: "Hey everyone, I'm new!",
    date: '03/23/2020'
  }];


function Chatwindow() {

    return (
        <div className="chatwindow">
            {chatMessages.map((chatMessage, index) => {
                return (
                    <Tooltip key={index} counter={index} date={chatMessage.date} user={chatMessage.user} message={chatMessage.text} />
                )
            })}    
        </div>
    );
}

export default Chatwindow;