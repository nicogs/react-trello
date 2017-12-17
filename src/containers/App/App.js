import React, {Component} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Board from "../Board/Board";


class App extends Component{
    render() {
        return (
            <Router>
                <div className="App">
                    <Sidebar/>
                    <Route path="/boards/:boardId" component={Board} />
                </div>
            </Router>
        );
    }
}

// const Board = ({match}) => (
//     <div>{match.params.boardId}</div>
// );

export default App;