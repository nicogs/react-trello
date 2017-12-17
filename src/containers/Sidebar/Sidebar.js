import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component{
    constructor(){
        super();
        this.state = {
            boards:[],
        };
    }

    componentDidMount(){
        fetch('https://api.trello.com/1/members/roqueperalta2/boards?key=e327c3e08523d8b0c0efca2189a7b372&token=fbb3cb59c7c63472fc502a0b65fb79b99e8e5fc1aef520492ccbd9308f56b147')
            .then(response => {
                return response.json();
            })
            .then(response => {
               let boards = response.map((board) => {
                   return (
                       <div key={board.id}>
                           <li>
                               <Link to={'/boards/'+ board.id}>{board.name}</Link>
                           </li>
                       </div>
                   )
               });
               this.setState({boards:boards})
            });

    }

    render(){
        return (
            <div className="sidebar">
                <h3>Boards</h3>
                <ul>
                    {this.state.boards}
                </ul>
            </div>
        );
    }
}

export default Sidebar;