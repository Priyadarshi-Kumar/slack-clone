import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Message from "./Message";
import ChatInput from "./ChatInput";

import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import "./Chat.css";

import db from "./firebase";

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState([]);
    const [roomMessages, setRoomMessages] = useState([]);
    useEffect(() => {
        if (roomId) {
            db.collection("room")
                .doc(roomId)
                .onSnapshot((snapShot) => {
                    setRoomDetails(snapShot.data());
                });
            db.collection("room")
                .doc(roomId)
                .collection("messages")
                .orderBy("timestamp", "asc")
                .onSnapshot((snapShot) =>
                    setRoomMessages(snapShot.docs.map((doc) => doc.data()))
                );
        }
    }, [roomId]);

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat_channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat__messages">
                {roomMessages.map(
                    ({ message, timestamp, user, userImage }, index) => (
                        <Message
                            key={index}
                            message={message}
                            timestamp={timestamp}
                            user={user}
                            userImage={userImage}
                        />
                    )
                )}
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    );
}

export default Chat;
