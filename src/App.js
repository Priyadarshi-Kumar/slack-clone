import React, { useState, Fragment } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="App">
            <Router>
                {!user ? (
                    <Login />
                ) : (
                    <Fragment>
                        <Header />
                        <div className="app__body">
                            <Sidebar />
                            <Switch>
                                <Route path="/room/:roomId">
                                    <Chat />
                                </Route>
                                <Route path="/">
                                    <h1>Welcome</h1>
                                    {/* <Chat /> */}
                                </Route>
                            </Switch>
                        </div>
                    </Fragment>
                )}
            </Router>
        </div>
    );
}

export default App;
