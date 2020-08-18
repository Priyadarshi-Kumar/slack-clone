import React from "react";
import { useEffect, useState } from "react";

import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import "./Chat.css";
import { useParams } from "react-router-dom";

import db from "./firebase";

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState([]);
    useEffect(() => {
        if (roomId) {
            db.collection("room")
                .doc(roomId)
                .onSnapshot((snapShot) => {
                    setRoomDetails(snapShot.data());
                });
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
        </div>
    );
}

export default Chat;
