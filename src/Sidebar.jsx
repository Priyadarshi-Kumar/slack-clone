import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommonIcon from "@material-ui/icons/InsertComment";
import PeopleIcon from "@material-ui/icons/People";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

import SidebarOption from "./SidebarOption";
import db from "./firebase";

function Sidebar() {
    const [channels, setChannels] = useState([]);
    useEffect(() => {
        db.collection("room").onSnapshot((snapshot) => {
            setChannels(
                snapshot.docs.map((doc) => (
                    {
                    id: doc.id,
                    name: doc.data().name,
                }))
            );
        });
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2> Pk The developer </h2>
                    <h3>
                        <FiberManualRecordIcon className="sidebar__record" />
                        Priyadarshi Kumar
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommonIcon} title="Thread 1" />
            <SidebarOption Icon={CreateIcon} title="Thread 1" />
            <SidebarOption title="Thread 1" />
            <SidebarOption Icon={PeopleIcon} title="Thread 1" />
            <SidebarOption Icon={InsertCommonIcon} title="Thread 1" />
            <SidebarOption title="Thread 1" />
            <SidebarOption Icon={InsertCommonIcon} title="Thread 1" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} title="Add channel" addChannelOption={true}/>
            {channels.map((channel) => (
                <SidebarOption title={channel.name} key={channel.id} id={channel.id}/>
            ))}
        </div>
    );
}

export default Sidebar;
