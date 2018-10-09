import React from 'react';
import Sidebar from './sidebar';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';
import SingleEmail from './single-email';
import EmailList from './email-list';
import './email.css';

export default function Email(props) {
    return (
        <Router>
            <div className="email">
                <Sidebar />
                <main>
                    <Route exact path='/' render={() => <Redirect to='/inbox' />}/>
                    <Route path='/:folderId' component={EmailList}/>
                    <Route exact path='/:folderId/:emailId' component={SingleEmail} />
                </main>
            </div>
        </Router>
    );
}
